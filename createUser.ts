import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash('password123', 10)
  const user = await prisma.user.create({
    data: {
      name: 'Nome Utente',
      email: 'utente@esempio.com',
      password: hashedPassword,
      role: 'USER'
    },
  })
  console.log('Utente creato:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })