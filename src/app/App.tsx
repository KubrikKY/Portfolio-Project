import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classnames';
import AppRouter from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
