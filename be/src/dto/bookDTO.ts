export interface BookDTO {
  nameProduct?: string;
  desc?: string;
  stock: number;
  price: number;
  image?: BookImage[];
}
export interface BookImage {
  url?: string;
}
