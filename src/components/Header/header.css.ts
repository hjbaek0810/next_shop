import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '@styles/token.css';

export const HEADER_BAR_HEIGHT = '8rem';

export const header = style({
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: tokens.gap['spacing-004'],
  padding: tokens.gap['spacing-016'],
  width: '100%',
  height: HEADER_BAR_HEIGHT,
});

export const logo = style({
  fontWeight: 'bold',
  fontSize: tokens.fontSize['font-size-020'],
});

export const bar = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: tokens.gap['spacing-008'],
});

export const menu = style({
  display: 'flex',
  gap: tokens.gap['spacing-012'],
  fontSize: tokens.fontSize['font-size-014'],
});

const activeStyle = {
  color: 'grey',
  fontWeight: 600,
};

export const menuItem = recipe({
  base: {
    ':active': activeStyle,
    ':hover': activeStyle,
  },
  variants: {
    selected: {
      true: activeStyle,
      false: {},
    },
  },
  defaultVariants: { selected: false },
});
