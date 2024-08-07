import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '@/styles/token.css';

export const sliderRoot = style({
  position: 'relative',
});

export const sliderList = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sliderItem = recipe({
  base: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'opacity 0.3s ease-in-out',
  },
  variants: {
    active: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const sliderLink = style({
  width: 'inherit',
  height: 'inherit',
  position: 'inherit',
});

export const sliderDotList = style({
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: tokens.gap['spacing-008'],
});

export const sliderDotItem = recipe({
  base: {
    width: tokens.sizing['sizing-008'],
    height: tokens.sizing['sizing-008'],
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  variants: {
    active: {
      true: {
        cursor: 'initial',
      },
      false: {
        opacity: '0.6',
        cursor: 'pointer',
      },
    },
  },
});
