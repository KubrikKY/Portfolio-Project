import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    theme = ThemeButton.CLEAR,
    className,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(style.Button, {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
