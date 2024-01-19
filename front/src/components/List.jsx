function List({ gifs }) {
  return (
    <div style={{ display: 'flex-wrap', alignContent: 'space-between' }}>
      {gifs?.map((giphy) => <img style={{ padding: '5px' }} key={giphy.id} src={giphy.images.preview_gif.url} alt="" />)}
    </div>

  );
}

export default List;
