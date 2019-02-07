export class Product {
  _id: string;
  sku: string;
  title: string;
  description: string;
  categoryId: number;
  cost: number;
  price: number;
  stockQuantity: number;
  thumbnailImageUrl: string;
  imageUrls: string[];
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}
