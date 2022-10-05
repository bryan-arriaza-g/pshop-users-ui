import axios from 'axios';

export const get = async apiUrl => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export default { get };
