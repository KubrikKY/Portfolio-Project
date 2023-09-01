import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import style from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(style.AppLink, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export { AppLink };
