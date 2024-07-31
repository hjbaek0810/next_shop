import { style } from '@vanilla-extract/css';

import { HEADER_BAR_HEIGHT } from '@components/Header/header.css';

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
  border: '1px solid red',
  marginTop: HEADER_BAR_HEIGHT,
});

export const container = style({
  flexGrow: '1',
  paddingLeft: '24rem',
});
