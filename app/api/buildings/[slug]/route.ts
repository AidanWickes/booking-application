import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/buildings/[slug]">,
) {
  const { slug } = await ctx.params;
  const building = await prisma.building.findUnique({
    where: {
      slug,
    },
    include: { resources: true },
  });
  if (!building) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(building);
}
