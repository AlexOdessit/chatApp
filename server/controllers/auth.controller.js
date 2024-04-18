const { User } = require("../models");

//Registration
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

// -  login user
module.exports.login = async (req, res, next) => {
  try {
    //login /email + pass
    const {
      body: { email, pass },
    } = req;

    const user = await User.findOne({ email });
    //404
    if (!user) {
      throw new Error("user with this data not found");
    }

    // 3.
  } catch (error) {
    next(error);
  }
};
