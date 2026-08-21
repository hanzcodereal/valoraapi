type ColorFn = (text: string | number) => string

const wrap = (start: number, end: number): ColorFn => (text) => `\x1b[${start}m${text}\x1b[${end}m`

interface ColorApi {
    reset: ColorFn
    bold: ColorFn
    dim: ColorFn
    italic: ColorFn
    underline: ColorFn
    black: ColorFn
    red: ColorFn
    green: ColorFn
    yellow: ColorFn
    blue: ColorFn
    magenta: ColorFn
    cyan: ColorFn
    white: ColorFn
    gray: ColorFn
}

const Color: ColorApi = {
    reset: wrap(0, 0),
    bold: wrap(1, 22),
    dim: wrap(2, 22),
    italic: wrap(3, 23),
    underline: wrap(4, 24),
    black: wrap(30, 39),
    red: wrap(31, 39),
    green: wrap(32, 39),
    yellow: wrap(33, 39),
    blue: wrap(34, 39),
    magenta: wrap(35, 39),
    cyan: wrap(36, 39),
    white: wrap(37, 39),
    gray: wrap(90, 39),
}

export default Color
