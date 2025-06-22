import {Request, Response, NextFunction} from 'express';
import { people, Person } from '../models/ExampleModel';

export const getJohn = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const newJohn: Person = {
            id: 'john',
            name: 'John Doe'
        };

        res.status(200).json(newJohn);
    } catch (error) {
        next(error);
    }
};