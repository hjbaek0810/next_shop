'use client';

import type { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import Header from '@components/Header';
import SideMenu from '@components/SideMenu';

import * as css from './layout.css';

export type MenuListType = {
  path: string;
  label: string;
  categoryList?: Array<string>;
};

const MENU_LIST: Array<MenuListType> = [
  {
    path: '/',
    label: 'HOME',
  },
  {
    path: '/new',
    label: 'NEW',
  },
  {
    path: '/best',
    label: 'BEST',
  },
  {
    path: '/outer',
    label: 'OUTER',
    categoryList: ['코트', '자켓', '무스탕', '패딩'],
  },
  {
    path: '/top',
    label: 'TOP',
    categoryList: ['티셔츠', '맨투맨/후드', '셔츠/블라우스'],
  },
  {
    path: '/bottom',
    label: 'BOTTOM',
    categoryList: ['면팬츠', '데님', '슬랙스', '반바지'],
  },
  {
    path: '/ops-sk',
    label: 'OPS/SK',
    categoryList: ['원피스', '스커트'],
  },
  {
    path: '/acc',
    label: 'ACC',
    categoryList: ['목걸이', '양말'],
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const matchedSideItem = MENU_LIST.find(
    item => item.path === pathname && item.categoryList,
  );

  const filteredHeaderList = MENU_LIST.map(({ categoryList, ...rest }) => rest);

  return (
    <div className={css.layout}>
      <Header list={filteredHeaderList} />
      <div className={css.outlet}>
        {matchedSideItem?.categoryList && (
          <SideMenu list={matchedSideItem.categoryList} />
        )}
        <div
          className={css.container({
            showSideMenu: !!matchedSideItem?.categoryList,
          })}
        >
          {children}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Layout;
