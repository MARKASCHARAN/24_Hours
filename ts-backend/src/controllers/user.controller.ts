import { Request, Response } from "express";
// import {User} from "../types/user";
import { PrismaClient } from "@prisma/client";
import { createUserSchema } from "../schemas/user.schema";

const prisma = new PrismaClient();


export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

export const createUsers = async (req: Request, res: Response) => {

    const data = createUserSchema.parse(req.body);

    const users = await prisma.user.create({
      data,
    });

    res.status(201).json(users);
}


// Without ORM([Prisma])

// const users: User[] = [];

// export const getUsers = (req: Request, res: Response) => {

//     res.json(users);

// };

// export const createUsers = (req: Request, res: Response ) => {

//     const user: User = {

//         id: Date.now(),
//         email: req.body.email,
//         name: req.body.names,

//     };

//     users.push(user);
//     res.status(201).json(user)  ;

// }   