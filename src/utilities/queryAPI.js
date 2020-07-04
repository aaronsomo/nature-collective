import axios from 'axios';

const queryAPI = (input, successFn, errorFn) => {
  return axios
    .get('https://nature-image-api.now.sh/search?q=', {
      params: {
        // key: 'AIzaSyCLJvxg85jgfaMwaORDzP9ECY83JCLXQtU',
        q: input,
        // orderBy: 'relevance',
        maxResults: 20,
        // fields:
        //   'totalItems,items(volumeInfo(title,authors,imageLinks/thumbnail,infoLink,publisher))'
      },
      timeout: 5000,
    })
    .then((res) => {
      let {
        data: { images },
      } = res;
      console.log(res);
      let result = images.length > 0 ? images : [];
      successFn(result);
      return res;
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'ECONNABORTED') {
        // timeout activated
        errorFn('The search request took too long - please try again later.');
      } else {
        let { message } = err.response.data.error;
        errorFn(message);
      }
      return err;
    });
};

export default queryAPI;
