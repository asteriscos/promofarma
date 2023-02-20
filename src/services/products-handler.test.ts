import ProductsHandler from './products-handler';
import axios from 'axios';
import products from '../../public/products.json';

jest.mock('axios');

describe('[ProductsHandler] Methods', () => {
   describe('getProducts: ', () => {
    it('Gets at least one product', async () => {
      (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: products }));

      const parts = await ProductsHandler.getProducts();
      expect(parts.length).toBeGreaterThan(0);
    });
  });

});