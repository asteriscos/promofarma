export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export type CartStore = {
  cartItems: Product[]
  total: number
}

export type CartAction = {
  type: string
  product: Product
}

export type DispatchType = (args: CartAction) => CartAction