// import { lazy, Suspense }
import { useRoutes } from 'react-router-dom';
import Home from '@pages/home/Home.pages';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return elements;
};
