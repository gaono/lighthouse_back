import {Request, Response, NextFunction} from 'express';

export interface AppError extends Error {
    status?: number;
};

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        message: message
    });
};