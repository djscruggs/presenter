import prisma from './prisma.server'

export const createUser = async (user: prisma.UserCreateInput): Promise<{ user: prisma.User }> => {
  const data = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    clerkId: user.clerkId,
    password: user.password != null ? user.password : '',
  }
  const newUser = await prisma.user.create({ data })
  return { user: newUser }
}




export const getUserByClerkId = async (clerkId: string): Promise<prisma.User> => {
  if (!prisma) {
    throw new Error('Prisma not found')
  }
  if (!prisma.user) {
    throw new Error('Prisma user not found')
  }
  return await prisma.user.findFirst({ where: { clerkId } })
}
export const updateUser = async (object: prisma.UserUpdateInput): Promise<prisma.User> => {
  const id = object?.id
  const clerkId = object?.clerkId
  const data = { ...object }
  if (id === undefined && clerkId === undefined) {
    throw new Error('User ID or Clerk ID is required')
  }
  let where: prisma.UserWhereInput
  if (id) {
    where = { id }
  } else if (clerkId) {
    where = { clerkId }
  }
  return await prisma.user.updateMany({ where, data })
}
export const deleteUser = async (user: prisma.UserUpdateInput): Promise<prisma.User> => {
  if (!user.id && !user.clerkId) {
    throw new Error('User ID or Clerk ID is required')
  }
  let where: prisma.UserWhereInput
  if (user.id) {
    where = { id: user.id }
  } else if (user.clerkId) {
    where = { clerkId: user.clerkId }
  }
  return await prisma.user.deleteMany({ where })
}
