import "dotenv/config";
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.booking.deleteMany(); //children first
  await prisma.user.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.resource.createMany({
    data: [
      { slug: "g12", name: "Study Room G12", type: "room", capacity: 6 },
      { slug: "lab2", name: "Mac Lab 2", type: "room", capacity: 24 },
      { slug: "cam1", name: "Camera Kit", type: "equipment", capacity: 1 },
      { slug: "court", name: "Sports Hall", type: "sport", capacity: 30 },
    ],
  });
}

main().finally(() => prisma.$disconnect());
