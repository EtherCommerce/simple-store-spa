export class Meta {
  title: string;
  description: string;
}

export class Category {
  _id: string;
  name: string;
  description: string;
  thumbnailImageUrl: string;
  meta: Meta = { title: '', description: '' };
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}

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

export class Feedback {
  _id: string;
  author: { name: string, email: string };
  content: string;
  rate: number;
  createdDate: Date;
}
