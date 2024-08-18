'use client';

import Banner from '@app/sections/Banner';
import Products from '@app/sections/Products';

import * as css from './page.css';

import type { ProductsPropsType } from '@app/sections/Products';

// FIXME
const products: Array<ProductsPropsType> = [
  {
    name: 'item',
    originalPrice: 8000,
    discountRate: 20,
    src: '/img/card_1.webp',
    redirectTo: '/',
  },
  {
    name: 'item2',
    originalPrice: 8000,
    src: '/img/card_1.webp',
    redirectTo: '/',
  },
  {
    name: 'item3',
    originalPrice: 8000,
    src: '/img/card_1.webp',
    redirectTo: '/',
  },
  {
    name: 'item4',
    originalPrice: 10000,
    discountRate: 10,
    src: '/img/card_1.webp',
    redirectTo: '/',
  },
  {
    name: 'item5',
    originalPrice: 20000,
    discountRate: 5,
    src: '/img/card_1.webp',
    redirectTo: '/',
  },
];

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className={css.sectionTitleWrapper}>
      <span className={css.sectionSubTitle}>{subTitle}</span>
      <h2 className={css.sectionTitle}>{title}</h2>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>

      <div className={css.sectionWrapper}>
        <section>
          <h2 className={css.aboutTitle}>XXX는</h2>
          <p className={css.aboutDescription}>
            차가운 인터넷 속에서도 따뜻한 나의 쇼핑메이트이고 싶습니다. <br />
            화려하지 않아도 편안하고 담백한 나만의 분위기, <br />그 속에서 자주
            손이 갈 실용적인 옷들을 제작합니다.
          </p>
        </section>

        <section>
          <SectionTitle title="Now Best!" subTitle="실시간 인기 순위" />
          <Products products={products} />
        </section>

        <section>
          <SectionTitle title="New Item!" subTitle="신상 이벤트 최대 7% 할인" />
          <Products products={products} />
        </section>
      </div>
    </main>
  );
};

export default Home;
