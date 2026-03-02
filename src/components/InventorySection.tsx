"use client";

import { useState, useMemo } from "react";
import { cars } from "@/data/inventory";
import CarCard from "./CarCard";

type SortOption = "recent" | "price-asc" | "price-desc";

export default function InventorySection() {
  const [sort, setSort] = useState<SortOption>("recent");
  const available = cars.filter((car) => car.status !== "Sold");

  const sorted = useMemo(() => {
    const list = [...available];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "recent":
        return list.sort((a, b) => Number(b.id) - Number(a.id));
    }
  }, [sort, available]);

  return (
    <section id="inventory" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestro Inventario
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Explora nuestra selección de vehículos de calidad. Cada auto es
            inspeccionado y está listo para su próximo dueño.
          </p>
        </div>

        {/* Sort filter */}
        {available.length > 0 && (
          <div className="flex justify-end mb-6">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand cursor-pointer"
            >
              <option value="recent">Recientes</option>
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
            </select>
          </div>
        )}

        {/* Car grid */}
        {available.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Próximamente nuevos vehículos.
            </p>
            <a
              href="https://www.instagram.com/berlinprestige.cars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-brand hover:text-brand-light transition-colors"
            >
              ¡Seguinos en Instagram para novedades!
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
