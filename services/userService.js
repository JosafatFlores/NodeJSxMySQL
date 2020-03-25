const query = require("../util/database/database");
const DBInstance = new query();

class userService {
   async getUsers() {
    console.log("llegue");
    const usuarios = await DBInstance.query("select * from usuarios")
     console.log("usuario", usuarios)
    return usuarios || [];
  }

  async getUser(movieID) {
    const movie = await Promise.resolve(movieMocks.movies);

    return movie[0] || {};
  }

  async createUser() {
    const movieCreated = await Promise.resolve(movieMocks);

    return movieCreated.movies[0].id || [];
  }

  async updateUser(movieID, data) {
    const movieUpdated = await Promise.resolve(movieMocks);

    return movieUpdated || {};
  }

  async deleteUser() {
    const movieDeleted = await Promise.resolve(movieMocks);

    return movieDeleted.movies[0].id || {};
  }
}

module.exports = userService;
