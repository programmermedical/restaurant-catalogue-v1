/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
import Posts from './DATA.json';

class DataSource {
  static searchPost(keyword) {
    return new Promise((resolved, rejected) => {
      const filteredPosts = Posts.restaurants.filter((post) => post.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredPosts.length) {
        resolved(filteredPosts);
      } else {
        rejected(`${keyword} is not found!`);
      }
    });
  }
}

export default DataSource;
