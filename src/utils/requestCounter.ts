// Simple in-memory total request counter (resets on cold start / redeploy)
let totalRequest = 0

export const incrementRequestCount = (): number => {
    totalRequest++
    return totalRequest
}

export const getRequestCount = (): number => totalRequest
