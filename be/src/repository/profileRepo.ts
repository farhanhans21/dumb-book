import { UpdateProfileDTO } from "../dto/profileDTO";
import { prisma } from "../libs/prisma";

export const updateProfile = async (body: UpdateProfileDTO, userId: number) => {
  const { ...rest } = body;
  return await prisma.profile.update({
    where: {
      userId: userId,
    },
    data: {
      ...rest,
    },
  });
};

export const getProfile = async (userId: number) => {
  return await prisma.profile.findFirst({
    where: {
      userId,
    },
  });
};
