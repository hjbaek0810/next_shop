import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ColorPalettes } from '@styles/palette';
import { tokens } from '@styles/token.css';

export const SIDE_MENU_WIDTH = tokens.sizing['sizing-160'];

export const sideMenu = style({
  position: 'fixed',
  width: SIDE_MENU_WIDTH,
  minWidth: SIDE_MENU_WIDTH,
  height: '100%',
  backgroundColor: 'white',
});

export const sideMenuItem = style({
  display: 'block',
  padding: tokens.spacing['spacing-016'],
  fontSize: tokens.fontSize['font-size-014'],
  fontWeight: 600,
});

export const sideMenuItemBg = recipe({
  variants: {
    selected: {
      true: {
        backgroundColor: ColorPalettes.Grey['95'],
      },
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});
