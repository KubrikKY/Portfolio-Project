import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import style from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(style.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={'30px'} height={'30px'} />
      ) : (
        <LightIcon width={'30px'} height={'30px'} />
      )}
    </Button>
  );
};

export { ThemeSwitcher };
