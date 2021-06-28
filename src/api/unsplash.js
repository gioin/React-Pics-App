import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID G_p5juuGmimwBLd0sR9ZQ0PMchkauy_Lu1SGd90_cUk',
  },
});
