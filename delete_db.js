const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  console.log('All previous posts deleted');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());