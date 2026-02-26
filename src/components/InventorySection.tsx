import { cars } from "@/data/inventory";
import CarCard from "./CarCard";

export default function InventorySection() {
  const available = cars.filter((car) => car.status !== "Sold");

  return (
    <section id="inventory" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Inventory
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our hand-picked selection of quality vehicles. Each car is
            inspected and ready for its next owner.
          </p>
        </div>

        {/* Car grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {available.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
