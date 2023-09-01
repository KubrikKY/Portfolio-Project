import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import style from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={classNames(style.links, {}, [])}>
        <AppLink
          to={'/'}
          className={style.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Main
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
