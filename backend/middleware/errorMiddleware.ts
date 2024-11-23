import { Request, Response, NextFunction } from 'express';

interface Error {
    status?: number;
    message: string;
}

/**
 * Error handling middleware to catch and respond with standard error messages.
 */
export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        success: false,
        message,
    });
};
