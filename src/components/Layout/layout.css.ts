import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ColorPalettes } from '@styles/palette';

import { HEADER_BAR_HEIGHT } from '@components/Header/header.css';
import { SIDE_MENU_WIDTH } from '@components/SideMenu/sideMenu.css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'white',
});

export const outlet = style({
  display: 'flex',
  flexGrow: '1',
  marginTop: HEADER_BAR_HEIGHT,
});

export const container = recipe({
  base: { flexGrow: '1', backgroundColor: ColorPalettes.Grey['95'] },
  variants: {
    showSideMenu: {
      true: {
        paddingLeft: SIDE_MENU_WIDTH,
      },
      false: {},
    },
  },
  defaultVariants: {
    showSideMenu: false,
  },
});
