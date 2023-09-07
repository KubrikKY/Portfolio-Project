import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import style from './LangSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(style.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};

export { LangSwitcher };
