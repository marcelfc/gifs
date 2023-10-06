import axios from 'axios';

const URL = 'https://api.giphy.com/v1/gifs/search?api_key=SECRET_KEY';

const instance = axios.create({
  baseURL: URL,
});

const getAll = async (value) => {
  try {
    const results = await instance.get('', { params: { q: value } });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAll;
