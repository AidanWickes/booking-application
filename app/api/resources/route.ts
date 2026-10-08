import { prisma } from "@/lib/prisma";

export async function GET() {
  const resources = await prisma.resource.findMany({
    orderBy: { name: "asc" },
  });
  return Response.json(resources);
}
