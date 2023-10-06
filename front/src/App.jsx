import './App.css';
import GiphyContextProvider from './context/GiphyContextProvider';
import ListGiphy from './pages/ListGifs';

function App() {
  return (

    <div className="App">
      <GiphyContextProvider>
        <ListGiphy />
      </GiphyContextProvider>

    </div>

  );
}

export default App;
