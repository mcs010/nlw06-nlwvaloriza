import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        // Verify if email exists
        const user = await usersRepositories.findOne({email})

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        // Verify if password is correct
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        // Generate token
        const token = sign({
            email: user.email}, "e16d18ccc13e6f7b7f3a89ba510fbcf5", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }