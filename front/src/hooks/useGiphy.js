import { useContext } from 'react';
import GiphyContext from '../context/GiphyContext';

export default function useGiphy() {
  return useContext(GiphyContext);
}
