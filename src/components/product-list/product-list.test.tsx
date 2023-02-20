import React from "react";
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from '../../store/'
import ProductList from "./product-list";
import ProductsHandler from '../../services/products-handler';
import { Product } from "../../types/types";


describe('[ProductsList]', () => {
  beforeEach(() => {
  });
  it("renders", async () => {
    jest.spyOn(ProductsHandler, 'getProducts').mockImplementation(() => Promise.resolve([
      {
        "id": 1,
        "name": "LaJusticia colágeno con magnesio 450comp",
        "price": 14.35
      }
    ] as Product[]));
    await act(async () => {
      render(<Provider store={store}><ProductList /></Provider>);
    });
    const resolvedEl = await screen.queryByTestId("product-list");
    expect(resolvedEl).not.toBe(null);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
})