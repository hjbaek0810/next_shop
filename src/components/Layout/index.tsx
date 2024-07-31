import type { PropsWithChildren } from 'react';

import Header from '@components/Header';
import Menu from '@components/Menu';

import * as css from './layout.css';

const Layout = ({ children }: PropsWithChildren) => (
  <div className={css.layout}>
    <Header />
    <div className={css.outlet}>
      <Menu />
      <div className={css.container}>{children}</div>
    </div>

    {/* Footer */}
  </div>
);

export default Layout;
