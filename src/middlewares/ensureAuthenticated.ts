import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receive token
    const authToken = request.headers.authorization

    // Validate if token is filled
    if(!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {
        // Validate if token is valid
        const { sub } = verify(token , "e16d18ccc13e6f7b7f3a89ba510fbcf5") as IPayload
        
        request.user_id = sub
        
        return next()

    } catch (error) {
        return response.status(401).end()
    }


    // Recuperar informações do usuário

}