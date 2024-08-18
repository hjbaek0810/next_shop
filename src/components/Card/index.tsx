import type { PropsWithChildren } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import * as css from './card.css';

type CardPricePropsType = {
  originalPrice: number;
  discountRate?: number;
};

type CardImagePropsType = {
  src: string;
  redirectTo: string;
};

const CardList = ({ children }: PropsWithChildren) => {
  return <ul className={css.cardList}>{children}</ul>;
};

const CardItem = ({ children }: PropsWithChildren) => {
  return <li className={css.cardItem}>{children}</li>;
};

const CardImage = ({ src, redirectTo }: CardImagePropsType) => {
  return (
    <Link href={redirectTo} className={css.cardImageWrapper}>
      <Image src={src} alt={redirectTo} fill sizes="100%" />
    </Link>
  );
};

const CardName = ({ children }: PropsWithChildren) => {
  return <p className={css.cardName}>{children}</p>;
};

// TODO
const CardColor = () => {};

const CardPrice = ({ originalPrice, discountRate }: CardPricePropsType) => {
  const productPrice = discountRate
    ? originalPrice * (1 - discountRate / 100)
    : originalPrice;

  return (
    <p className={css.cardPriceWrap}>
      <span className={css.cardProductPrice}>{productPrice}</span>

      {discountRate && (
        <>
          <span className={css.cardDiscountRate}>{discountRate}%</span>
          <span className={css.cardProductOriginalPrice}>{originalPrice}</span>
        </>
      )}
    </p>
  );
};

const Card = Object.assign(CardList, {
  Item: CardItem,
  Image: CardImage,
  Name: CardName,
  Price: CardPrice,
});

export default Card;
