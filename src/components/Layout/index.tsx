'use client';

import type { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import SideMenu from '@/components/SideMenu';

import Header from '@components/Header';

import * as css from './layout.css';

type menuListType = {
  path: string;
  label: string;
};

export const MENU_LIST: Array<menuListType> = [
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
  },
  {
    path: '/top',
    label: 'TOP',
  },
  {
    path: '/bottom',
    label: 'BOTTOM',
  },
  {
    path: '/ops-sk',
    label: 'OPS/SK',
  },
  {
    path: '/acc',
    label: 'ACC',
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const showSideMenu =
    pathname !== '/' && MENU_LIST.some(item => item.path === pathname);

  return (
    <div className={css.layout}>
      <Header />
      <div className={css.outlet}>
        {showSideMenu && <SideMenu />}
        <div className={css.container}>{children}</div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Layout;
