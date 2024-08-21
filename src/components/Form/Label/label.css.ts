import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ColorPalettes } from '@/styles/palette';
import { tokens } from '@/styles/token.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

export const label = recipe({
  base: {
    fontWeight: 600,
    fontSize: tokens.fontSize['font-size-012'],
  },
  variants: {
    error: {
      true: {
        color: '#C5212E',
      },
      false: {
        color: ColorPalettes.Grey['10'],
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const star = style({
  color: '#C5212E',
});

export type LabelVariants = NonNullable<RecipeVariants<typeof label>>;
