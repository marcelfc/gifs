import { useMemo, useState } from 'react';
import GiphyContext from './GiphyContext';

import getAll from '../services/Giphy.service';
import { createHistory, getAllHistory } from '../services/History.service';

function GiphyContextProvider({ children }) {
  const [giphys, setGiphys] = useState([]);
  const [history, setHistory] = useState([]);

  const context = useMemo(() => ({
    giphys,
    history,
    fetchGiphys(value = '') {
      getAll(value).then((results) => setGiphys(results.data));
    },
    fetchHistory(value = '') {
      getAllHistory(value).then((results) => setHistory(results.data));
    },
    createHistory(value) {
      createHistory(value);
    },
  }));
  return (
    <GiphyContext.Provider value={context}>
      {children}
    </GiphyContext.Provider>
  );
}

export default GiphyContextProvider;
