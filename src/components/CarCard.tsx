import Image from "next/image";
import { Car } from "@/types/car";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatMileage(mileage: number): string {
  return new Intl.NumberFormat("en-US").format(mileage);
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden border border-dark-600 hover:border-brand/50 transition-all duration-300 group">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3 flex gap-2">
          {car.status === "Pending" && (
            <span className="bg-yellow-500/90 text-dark-900 text-xs font-bold px-2.5 py-1 rounded">
              Pendiente
            </span>
          )}
          {car.consignment && (
            <span className="bg-brand/90 text-dark-900 text-xs font-bold px-2.5 py-1 rounded">
              Consignación
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">
          {car.year} {car.make} {car.model}
        </h3>
        {car.trim && (
          <p className="text-sm text-gray-400 mt-0.5">{car.trim}</p>
        )}

        {/* Specs row */}
        <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
          <span>{formatMileage(car.mileage)} km</span>
          <span className="text-dark-500">&bull;</span>
          <span>{car.transmission}</span>
          <span className="text-dark-500">&bull;</span>
          <span>{car.drivetrain}</span>
        </div>

        {/* Color */}
        <p className="text-sm text-gray-500 mt-2">{car.exteriorColor}</p>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-brand">
            {formatPrice(car.price)}
          </span>
          <a
            href={`https://wa.me/5491126160829?text=${encodeURIComponent(`Hola, me interesa el ${car.year} ${car.make} ${car.model}${car.trim ? ` ${car.trim}` : ""} que vi en Berlin Prestige. ¿Podrían darme más información?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-brand transition-colors"
          >
            Consultar &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
