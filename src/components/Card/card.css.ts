import { style } from '@vanilla-extract/css';

import { tokens } from '@styles/token.css';

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: tokens.spacing['spacing-016'],
  rowGap: tokens.spacing['spacing-032'],
});

export const cardItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing['spacing-008'],
  fontSize: tokens.fontSize['font-size-016'],
});

export const cardImageWrapper = style({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '440px', // FIXME
});

export const cardName = style({
  color: '#333',
});

export const cardPriceWrap = style({
  display: 'flex',
  gap: tokens.spacing['spacing-004'],
  alignItems: 'flex-end',
});

export const cardProductPrice = style({
  fontWeight: '700',
});

export const cardDiscountRate = style({
  color: '#cc6600',
});

export const cardProductOriginalPrice = style({
  fontSize: tokens.fontSize['font-size-012'],
  color: '#999',
});
