import ms from "modularscale-js"

function modularScale(n) {
  var settings = {
    base: 1,
    ratio: 1.067,
  }

  return `${ms(n, settings)}rem`
}

const colors = {
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base0: "#839496",
  base1: "#93a1a1",
  cyan: "#2aa198",
}

const typography = {
  base: {
    color: colors.base0,
    fontFamily: "'inconsolata', Courier, monospace",
    fontSize: {
      small: modularScale(-1),
      medium: modularScale(0),
      large: modularScale(1),
    },
    fontWeight: 500,
    lineHeight: {
      small: modularScale(5),
      medium: modularScale(5),
      large: modularScale(6),
    },
  },
  heading: {
    color: colors.base1,
    fontFamily: "'ff-meta-serif-web-pro', 'Times New Roman', Times, serif",
    fontWeight: 700,
  },
  anchor: {
    backgroundColor: colors.base02,
    color: colors.cyan,
  },
}

const tokens = {
  colors,
  typography,
}

export { tokens, modularScale }
