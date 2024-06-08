export interface IUser {
    createdAt: string;
    email: string;
    id: string;
    lastname: string;
    name: string;
    password: string;
    updatedAt: string;
}


export interface IProduct {
    createdAt: string;
    id: string;
    name: string;
    description: string;
    image?: string;
    categoryId: string;
    category: string;
    updatedAt: string;
}

export interface ICategory {
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
}