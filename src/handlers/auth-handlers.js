import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import UserModel from '../data/models/user-model.js';

const generatePayload = (user) => {

  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
    expiresIn: Number.parseInt(process.env.JWT_EXPIRES_TIME_IN_SECS),
  });
  const refreshToken = uuidv4();
  const name = user.name;
  const email = user.email;
  const isPartner = user.isPartner;
  const isAdministrator = user.isAdministrator;
  const isGenericUser = user.isGenericUser;

  return { token, refreshToken, name, email, isGenericUser, isAdministrator,isPartner };
};

export const loginHandler = async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne(
    { email }
  );

  console.log(user)

  if (!user) {
    return res.status(401).json({ message: 'Wrong credentials' });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return res.status(401).json({ message: 'Wrong credentials ' });
  }

  const payload = generatePayload(user);

  await UserModel.updateOne(
    { _id: user._id },
    {
      $push: {
        refreshTokens: {
          value: payload.refreshToken,
        },
      },
    }
  );

  return res.json(payload);

}