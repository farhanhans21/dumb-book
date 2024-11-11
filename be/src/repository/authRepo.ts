import { RegisterDTo } from "../dto/authDTO";
import { prisma } from "../libs/prisma";

export const findUserByEmail = async (usernameOrEmail: string) => {
  return prisma.user.findFirst(
    {
        where:{ OR: [{username: usernameOrEmail}, {email: usernameOrEmail}]}
    }
  )
};


export const createUser = async (bodyRegis: RegisterDTo) => {
  return prisma.user.create({
data:{
  username: bodyRegis.username,
  email: bodyRegis.email,
  password: bodyRegis.password,
  role: bodyRegis.role, 
  profile:{
    create:{
        fullname: bodyRegis.fullname
    }
  }
}
  })
};
