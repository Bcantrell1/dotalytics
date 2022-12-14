import { User } from '@prisma/client';
import { NextApiResponse } from 'next';
import {prisma} from '../../../server/db/client';
import router from '../../../lib/router';

export interface IUserAuthRequest extends Request {
  user: User;
}

const path = '/api/auth/user';

export default router.get(
  path,
  async (req: IUserAuthRequest, res: NextApiResponse) => {
    try {
      if (!req.user) throw 'No user object on request';

      const userId = req.user.id;
      const user = await prisma.user.findFirst({
        where: { id: userId },
        select: {
          id: true,
          displayName: true,
          avatarfull: true,
          profileurl: true,
          lastLogin: false,
          createdAt: false,
          followers: {
            select: {
              id: true,
              displayName: true,
            },
          },
          following: {
            select: {
              id: true,
              displayName: true,
            },
          },
        },
      });
      if (!user) throw `No user with id ${userId}`;

      res.status(200).json({ user: user });
    } catch (error: any) {
      res.status(401).json({ user: undefined, error: true });
    }
  }
);
