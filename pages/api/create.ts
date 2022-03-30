// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({
      name: 'Method not allowed'
    });
  }
  try {
    const { user } = req.body;
    //const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
      data: user
    })
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }

}


export default handler
