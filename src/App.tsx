import React from 'react';
import { Cart, ProductList, ErrorBoundary } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='shop-container'>
        <ErrorBoundary>
        <ProductList />
        <Cart />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
