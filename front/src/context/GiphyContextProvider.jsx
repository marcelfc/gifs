import { useMemo, useState } from 'react';
import GiphyContext from './GiphyContext';

import getAll from '../services/Giphy.service';

function GiphyContextProvider({ children }) {
  const [giphys, setGiphys] = useState([]);

  const context = useMemo(() => ({
    giphys,
    fetchGiphys(value = '') {
      getAll(value).then((results) => setGiphys(results.data));
    },
  }));
  return (
    <GiphyContext.Provider value={context}>
      {children}
    </GiphyContext.Provider>
  );
}

export default GiphyContextProvider;
