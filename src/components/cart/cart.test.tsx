import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux'
import { store } from '../../store/'
import Cart from "./cart";


describe('[Cart]', () => {
  it("renders", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    
    act(() => {
      render(<Provider store={store}><Cart /></Provider>, container);
    });
    expect(container.textContent).toBe('MI CESTA:TOTAL (0 Productos)0 €');

  });
})