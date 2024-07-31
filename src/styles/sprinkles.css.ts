import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from './token.css';

const spacingProperties = defineProperties({
  properties: {
    padding: tokens.gap,
    paddingTop: tokens.gap,
    paddingBottom: tokens.gap,
    paddingLeft: tokens.gap,
    paddingRight: tokens.gap,
    margin: { ...tokens.gap, horizontalCenter: '0 auto' },
    marginTop: tokens.gap,
    marginBottom: tokens.gap,
    marginLeft: tokens.gap,
    marginRight: tokens.gap,
    gap: tokens.gap,
  },
  shorthands: {
    paddingX: ['paddingRight', 'paddingLeft'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginRight', 'marginLeft'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const fontProperties = defineProperties({
  properties: {
    fontSize: tokens.fontSize,
  },
});

const sizingProperties = defineProperties({
  properties: {
    width: tokens.sizing,
    minWidth: tokens.sizing,
    maxWidth: tokens.sizing,
    height: tokens.sizing,
    minHeight: tokens.sizing,
    maxHeight: tokens.sizing,
  },
});

export const sprinkles = createSprinkles(
  spacingProperties,
  fontProperties,
  sizingProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
