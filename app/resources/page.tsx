import ResourceCard from "../_components/resource-card";
import { resources } from "@/lib/resources";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold tracking-tight">Resources</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 sm:rounded-md sm:border sm:border-rule sm:p-8 sm:period-grid lg:grid-cols-3">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} popular={r.capacity > 20} />
        ))}
      </section>
    </>
  );
}
