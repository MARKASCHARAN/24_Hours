import { Request, Response, NextFunction } from "express";
import { ZodError} from "zod";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if(err instanceof ZodError){
        const errors = err.issues.map( issue => issue.message);
        return res.status(400).json({errors});
    }


    console.log(err);
    res.status(500).json({error: err.message || " Internal Server Error"});
    
};