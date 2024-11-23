// Define reusable interfaces
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
  }
  
  export interface PaginationOptions {
    page?: number;
    limit?: number;
  }
  
  export interface AuthCredentials {
    email: string;
    password: string;
  }
  
  export interface PostCreateDTO {
    title: string;
    content: string;
  }
  
  export interface UserPayload {
    id: string;
    email: string;
  }
  
  export interface TokenPayload {
    id: string;
    email: string;
    iat: number;
    exp: number;
  }
  
  export interface ErrorResponse {
    statusCode: number;
    message: string;
    stack?: string;
  }
  
  // Define AsyncHandler type
  export type AsyncHandler<T = any> = (
    req: Request,
    res: Response
  ) => Promise<void>;
  