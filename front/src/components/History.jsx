function History({ histories }) {
  return (
    <div style={{ display: 'flex-wrap' }}>
      {histories?.map((history) => (
        <b>
          {history._search}
          {' '}
          |
          {' '}
        </b>
      ))}
    </div>

  );
}

export default History;
