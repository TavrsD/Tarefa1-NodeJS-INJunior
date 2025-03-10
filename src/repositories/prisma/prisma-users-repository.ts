import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";
import { UsersRepository, UserUpdateInput } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository{
    async update(id: string, data: UserUpdateInput): Promise<User | null> {
        const user = await prisma.user.update({
            where: { id },
            data: {
                name: data.name,
                photo: data.photo,
                email: data.email,
                password: data.password
            }
        })
        return user
    }

    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    }
    
    async delete(id: string): Promise<User | null> {
        const user = await prisma.user.delete({
            where: {
                id
            }
        })
        return user
    }
   
    async findAll(): Promise<User[]> {
        const users = await prisma.user.findMany()
        return users
    }
   
    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return user
    }

    async create(data: Prisma.UserCreateInput){
        const user = await prisma.user.create({
            data
        })
            return user
    }   
}