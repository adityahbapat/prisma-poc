import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   await prisma.user.create({
//     data: {
//       name: 'Aditya',
//       email: 'adi@prisma.io',
//       posts: {
//         create: { title: 'New Post' },
//       },
//     },
//   })

  const allUsers = await prisma.profile.findMany();
  console.log(allUsers);

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })