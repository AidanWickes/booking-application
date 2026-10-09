import "dotenv/config";
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.booking.deleteMany(); //children first
  await prisma.user.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.building.deleteMany();

  await prisma.building.create({
    data: { slug: "htdc", name: "Hi-Tech Digital Centre" },
  });
  const htdc = await prisma.building.findUniqueOrThrow({
    where: { slug: "htdc" },
  });

  await prisma.resource.createMany({
    data: [
      {
        slug: "g12",
        name: "Study Room G12",
        type: "room",
        capacity: 6,
        buildingId: htdc.id,
      },
      {
        slug: "lab2",
        name: "Mac Lab 2",
        type: "room",
        capacity: 24,
        buildingId: htdc.id,
      },
      {
        slug: "cam1",
        name: "Camera Kit",
        type: "equipment",
        capacity: 1,
        buildingId: htdc.id,
      },
      {
        slug: "court",
        name: "Sports Hall",
        type: "sport",
        capacity: 30,
        buildingId: htdc.id,
      },
    ],
  });
  const g12 = await prisma.resource.findUniqueOrThrow({
    where: { slug: "g12" },
  });

  await prisma.user.create({
    data: {
      email: "amy@example.ac.uk",
      name: "Amy Student",
      bookings: {
        create: {
          resourceId: g12.id,
          startsAt: new Date("2026-10-06T10:00:00Z"),
          endsAt: new Date("2026-10-06T11:00:00Z"),
        },
      },
    },
  });
  await prisma.user.create({
    data: {
      email: "aidan@example.ac.uk",
      name: "Aidan Admin",
      role: "admin",
      bookings: {
        create: {
          resourceId: g12.id,
          startsAt: new Date("2026-10-06T11:00:00Z"),
          endsAt: new Date("2026-10-06T12:00:00Z"),
        },
      },
    },
  });
}

main().finally(() => prisma.$disconnect());
