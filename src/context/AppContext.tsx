import React, {
  createContext,
  useState,
  ReactElement,
  useEffect
} from 'react';

import {
  Article,
  DataContext
} from '../interfaces';
import storage from '../storage';

export const AppContext = createContext<DataContext>({
  articles: [],
  setArticles: () => { }
});

interface Props {
  children: ReactElement
}

export const AppProvider: React.FC<Props> = (props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const articlesStorage: any = storage.get('articlesStorage');

    if (articlesStorage) {
      setArticles(articlesStorage);
    }
  }, []);

  return (
    <AppContext.Provider value={
      {
        articles,
        setArticles
      }
    }>
      {props.children}
    </AppContext.Provider>
  );
};
