// Format process uptime (in seconds) into a readable Indonesian string
export const runtime = (seconds: number): string => {
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)

    return `${d} Hari ${h} Jam ${m} Menit ${s} Detik`
}
