import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classnames';
import AppRouter from './providers/Router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>theme</button>

      <AppRouter />
    </div>
  );
};

export default App;
