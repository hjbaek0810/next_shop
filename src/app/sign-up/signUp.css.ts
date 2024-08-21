import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { tokens } from '@/styles/token.css';

export const signUpFormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing['spacing-024'],
  padding:tokens.spacing['spacing-016']
});

export const titleSection = style({
  display: 'flex',
  gap: tokens.spacing['spacing-008'],
  alignItems: 'center',
  // marginBottom: tokens.spacing['spacing-024'],
  color: '#3f3f3f',
  fontSize: tokens.fontSize['font-size-012'],
});

export const formTitle = sprinkles({
  paddingY: 'spacing-012',
  fontSize: 'font-size-016',
});
