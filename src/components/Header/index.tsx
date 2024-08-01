'use client';

import {
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { MenuListType } from '@components/Layout';

import * as css from './header.css';

type HeaderPropsType = {
  list: Array<Pick<MenuListType, 'label' | 'path'>>;
};

const Header = ({ list }: HeaderPropsType) => {
  const pathname = usePathname();
  const selected = (menuPath: string) => menuPath === pathname;

  return (
    <div className={css.header}>
      {/* TODO : logo img */}
      <Link className={css.logo} href="/">
        Logo
      </Link>

      <div className={css.bar}>
        <ul className={css.menu}>
          {list.map(({ label, path }) => (
            <li
              key={label}
              className={css.menuItem({ selected: selected(path) })}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className={css.menu}>
          <li>
            {/* TODO : search 기능 */}
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
          <li>
            <Link href="/my-account">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
          <li>
            <Link href="/like">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
