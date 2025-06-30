import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: User[] = await User.findAll();

    res.json(users);
  } catch (error) {
    next(error);
  }
};
