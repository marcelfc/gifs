import { useEffect } from 'react';
import useGiphy from '../hooks/useGiphy';
import List from '../components/List';
import History from '../components/History';

function ListGiphy() {
  const {
    giphys, fetchGiphys, createHistory, fetchHistory, history,
  } = useGiphy();

  console.log(history);

  useEffect(() => {
    fetchGiphys();
    fetchHistory();
  }, []);

  const searchGif = (value) => {
    fetchGiphys(value);
    createHistory(value);
    fetchHistory();
  };

  return (
    <>
      <h3>List of Gifs</h3>
      <div>
        <h2>Search for a gif! </h2>
        <form action="">
          <input type="text" name="search" onBlur={(e) => searchGif(e.target.value)} />
        </form>
        <History histories={history?.data} />
        <List gifs={giphys?.data || []} />
      </div>

    </>
  );
}

export default ListGiphy;
