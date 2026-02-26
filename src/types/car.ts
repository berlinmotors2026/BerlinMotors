export interface Car {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage: number;
  exteriorColor: string;
  transmission: "Automatic" | "Manual";
  drivetrain: string;
  status: "Available" | "Pending" | "Sold";
  consignment: boolean;
  image: string;
  description?: string;
}
