import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { tokens } from '@styles/token.css';

import { WEB_WIDTH } from '@components/Layout/layout.css';

export const sectionWrapper = style([
  sprinkles({
    paddingX: 'spacing-016',
    paddingY: 'spacing-056',
    gap: 'spacing-072',
    margin: 'horizontalCenter',
  }),
  {
    width: WEB_WIDTH,
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const aboutTitle = style({
  color: '#3f3f3f',
  fontSize: tokens.fontSize['font-size-020'],
  fontWeight: 600,
  textAlign: 'center',
});

export const aboutDescription = style({
  marginTop: tokens.spacing['spacing-008'],
  color: '#3f3f3f',
  fontSize: tokens.fontSize['font-size-014'],
  textAlign: 'center',
});

export const sectionTitleWrapper = style({
  paddingBottom: tokens.spacing['spacing-024'],
  textAlign: 'center',
  lineHeight: '1.8',
});

export const sectionTitle = style({
  color: '#3f3f3f',
  fontWeight: 400,
  fontSize: tokens.fontSize['font-size-020'],
});

export const sectionSubTitle = style({
  color: '#705b46',
  fontWeight: 500,
  fontSize: tokens.fontSize['font-size-014'],
});
