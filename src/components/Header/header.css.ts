import { style } from '@vanilla-extract/css';

export const HEADER_BAR_HEIGHT = '5.4rem';

export const header = style({
	position: 'fixed',
	left: 0,
	top: 0,
	padding: '1.6rem',
	width: '100%',
	height: HEADER_BAR_HEIGHT,
	backgroundColor: 'pink'
});
