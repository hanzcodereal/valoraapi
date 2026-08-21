import type { OpenAPIHono } from '@hono/zod-openapi'
import type { Context } from 'hono'

const registeredRoutes: { method: string; path: string }[] = []

export const register = (app: OpenAPIHono, route: any, handler: (c: Context) => any) => {
    registeredRoutes.push({ method: route.method, path: route.path })

    app.openapi(route, (c: Context) => {
        if (route['x-status'] === 'OFFLINE') {
            return c.json({
                error: 'Service Unavailable',
                message: 'This endpoint is currently OFFLINE.',
                status: 503
            }, 503)
        }
        return handler(c)
    })
}

export const getTotalFitur = (): number => registeredRoutes.length
