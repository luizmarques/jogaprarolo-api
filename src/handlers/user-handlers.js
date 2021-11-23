import bcrypt from 'bcrypt';
import UserModel from '../data/models/user-model.js';

export const getUsersHandler = () => {

}
export const patchUserHandler = () => {

}
export const putUserHandler = () => {

}
export const postUserHandler = async (req, res) => {
  const { body } = req;

  const salt = await bcrypt.genSalt(Number.parseInt(process.env.BCRYPT_SALT_ROUNDS, 10));
  const password = await bcrypt.hash(body.password, salt);

  try {
    const user = new UserModel({ ...body, password });
    await user.save();

    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: 'Internal server error', error: e });
  }

}

export const getCurrentUserHandler = (req, res) => {
  res.status(200).send("teste")

}
export const getUserHandler = () => {

}
export const deleteUserHandler = () => {

}