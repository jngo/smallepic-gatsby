import ms from "modularscale-js"

function modularScale(increment) {
  var settings = {
    base: 1,
    ratio: 1.067,
  }

  return `${ms(increment, settings)}rem`
}

const colors = {
  base00: "#657b83",
  base01: "#586e75",
  base02: "#073642",
  base03: "#002b36",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3",
  cyan: "#2aa198",
}

const box = {
  background: {
    color: {
      dark: colors.base03,
      light: colors.base3,
    },
  },
  border: {
    color: {
      dark: colors.base02,
      light: colors.base2,
    },
  }
}

const typography = {
  base: {
    color: {
      dark: colors.base0,
      light: colors.base00,
    },
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
    color: {
      dark: colors.base1,
      light: colors.base01,
    },
    fontFamily: "'ff-meta-serif-web-pro', 'Times New Roman', Times, serif",
    fontWeight: 700,
  },
  anchor: {
    backgroundColor: {
      dark: colors.base02,
      light: colors.base2,
    },
    color: {
      dark: colors.cyan,
      light: colors.cyan,
    },
  },
}

const tokens = {
  colors,
  box,
  typography,
}

export { tokens, modularScale }
