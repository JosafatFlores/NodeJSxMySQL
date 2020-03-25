const userService = require("../services/userService");
const serviceInstance = new userService();

const getAllUsers = async (req, res, next) => {
    try {
      const users = await serviceInstance.getUsers();
      console.log("aqui",users)
      res.status(200).json({
        data: users,
        message: "users"
      });
    } catch (error) {
      next(error);
    }
  }

const getOneUser = async (req, res, next) => {
    const { movieID } = req.params;
    try {
      const tags = req.query;
      const movies = await serviceInstance.getUser({ movieID });
      res.status(200).json({
        data: movies,
        message: "peliculas"
      });
    } catch (error) {
      next(error);
    }
  };
  
  
  
    const createUser =  async (req, res, next) => {
      
      const { body: movie } = req;
      
      try {
        const created = await serviceInstance.createUser({movie});
        res.status(200).json({
          data: created,
          message: "Done"
        });
      } catch (error) {
        next(error);
      }
    }
  
    const updatedUser =  async (req, res, next) => {
      const { body: movie } = req;
      const { movieID } = req.params;
      try {
        const updated = await serviceInstance.updateUSer({movieID,movie})
  
        res.status(200).json({
          data: updated,
          message: "Updated movie"
        });
      } catch (error) {
        next(error);
      }
    }
  
    const deletedUser =  async (req, res, next) => {
      const { movieID } = req.params;
      
      try {
        const deleted = await serviceInstance.deleteUser({movieID})
  
        res.status(200).json({
          data: deleted,
          message: "Deleted movie"
        });
      } catch (error) {
        next(error);
      }
    }
  
  module.exports = {
      getAllUsers,
      getOneUser,
      createUser,
      updatedUser,
      deletedUser
  }