import { PrismaClient } from '@prisma/client'
let prisma: PrismaClient | null = null
declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/naming-convention
  var __db: PrismaClient | undefined
}
if (process.env.NODE_ENV === 'production') {
  void (async () => {
    prisma = new PrismaClient()
    await prisma.$connect()
  })()
} else {
  if (!global.__db) {
    void (async () => {
      global.__db = new PrismaClient()
      await global.__db.$connect()
    })()
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  prisma = global.__db!
}

export default prisma
