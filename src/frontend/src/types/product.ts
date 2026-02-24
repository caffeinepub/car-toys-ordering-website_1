// Local type definitions for products since backend is empty
export enum Category {
  SportCars = 'SportCars',
  HyperSportCars = 'HyperSportCars',
  F1Cars = 'F1Cars',
}

export interface Product {
  id: bigint;
  name: string;
  description: string;
  price: bigint;
  category: Category;
  image?: string;
}
