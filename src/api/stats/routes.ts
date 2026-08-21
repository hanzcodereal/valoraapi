import { createRoute, z } from '@hono/zod-openapi'
import type { Context } from 'hono'
import { getTotalFitur } from '../../utils/route.js'
import { getRequestCount } from '../../utils/requestCounter.js'
import { runtime } from '../../utils/runtime.js'

export const statsRoute = createRoute({
    method: 'get',
    path: '/api/stats',
    summary: 'Server Status',
    description: 'Get live server status: total request, total fitur/endpoint, runtime, dan domain.',
    tags: ['System Info'],
    'x-status': 'ONLINE',
    request: {
        query: z.object({
            apikey: z.string().openapi({
                example: 'valora-api',
                description: 'Valid API Key'
            })
        })
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: z.object({
                        status: z.boolean().openapi({ example: true }),
                        result: z.object({
                            status: z.string().openapi({ example: 'Aktif' }),
                            totalrequest: z.string().openapi({ example: '1' }),
                            totalfitur: z.string().openapi({ example: '3' }),
                            runtime: z.string().openapi({ example: '0 Hari 0 Jam 1 Menit 5 Detik' }),
                            domain: z.string().openapi({ example: 'valoraapi.vercel.app' })
                        })
                    }),
                },
            },
            description: 'Retrieve live server status',
        },
    },
})

export const statsHandler = (c: Context) => {
    try {
        const domain = c.req.header('host') || new URL(c.req.url).hostname

        return c.json({
            status: true,
            result: {
                status: 'Aktif',
                totalrequest: getRequestCount().toString(),
                totalfitur: Math.max(getTotalFitur() - 1, 0).toString(),
                runtime: runtime(process.uptime()),
                domain
            }
        }, 200)
    } catch (error: any) {
        return c.json({
            status: false,
            message: `Error: ${error.message}`
        }, 500)
    }
      }
