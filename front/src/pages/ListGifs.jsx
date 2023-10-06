import { useEffect } from 'react';
import useGiphy from '../hooks/useGiphy';

function ListGiphy() {
  const { giphys, fetchGiphys } = useGiphy();

  useEffect(() => {
    fetchGiphys();
  }, []);

  const searchGif = (value) => {
    fetchGiphys(value);
  };

  const renderGiphys = () => giphys?.data?.map((giphy) => <li key={giphy.id}><img src={giphy.images.preview_gif.url} alt="" srcSet="" /></li>);
  return (
    <>
      <h3>List of Gifs</h3>
      <div>
        <h2>Search for a gif! </h2>
        <form action="">
          <input type="text" name="search" onBlur={(e) => searchGif(e.target.value)} />
        </form>
      </div>
      <ul>
        {renderGiphys()}
      </ul>
    </>
  );
}

export default ListGiphy;
