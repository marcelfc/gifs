import axios from 'axios';

const URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: URL,
});

const getAllHistory = async () => {
  try {
    const results = await instance.get('/history');
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const createHistory = async (search) => {
  try {
    const results = await instance.post('/history', { search });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export { createHistory, getAllHistory };
