'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import useCreateSearchQuery from '@utils/hooks/useCreateSearchQuery';

import * as css from './sideMenu.css';

type SideMenuPropsType = {
  list: Array<string>;
};

const SideMenu = ({ list }: SideMenuPropsType) => {
  const getPathQuery = useCreateSearchQuery();

  const searchParams = useSearchParams();

  const categorySearch = searchParams.get('category');

  return (
    <aside>
      <ul className={css.sideMenu}>
        <li
          className={css.sideMenuItemBg({
            selected: categorySearch === null,
          })}
        >
          <Link
            className={css.sideMenuItem}
            href={getPathQuery('category', null)}
          >
            ALL
          </Link>
        </li>
        {/* TODO: 카테고리를 BE api에서 조회하도록? */}
        {list.map(item => (
          <li
            key={item}
            className={css.sideMenuItemBg({
              selected: categorySearch === item,
            })}
          >
            <Link
              className={css.sideMenuItem}
              href={getPathQuery('category', item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
