import React, { createContext, useReducer } from 'react';
import order from '../order.js';


const initialState = {
  orders: [
    {
      orderid: "2004",
      customername: "Mitul Anand",
      restaurant: "Pizza Hut",
      items: [
        { name: "Margherita Pizza", price: 12.99, quantity: 2 },
        { name: "Garlic Bread", price: 4.99, quantity: 1 }
      ],
      totalamount: 40.97,
      status: "Delivered",
      deliverytime: "2023-10-01T18:30:00Z",
      rating: 5
    },
    {
      orderid: "2001",
      customername: "Rishi",
      restaurant: "Burger Man",
      items: [
        { name: "Cheeseburger", price: 8.99, quantity: 1 }
      ],
      totalamount: 18.99,
      status: "Delivered",
      deliverytime: "2023-10-02T19:00:00Z",
      rating: 4
    },
    {
      orderid: "1005",
      customername: "Vignesh",
      restaurant: "Taco Bell",
      items: [
        { name: "Tacos", price: 5.99, quantity: 3 }
      ],
      totalamount: 27.97,
      status: "Cancelled",
      deliverytime: null,
      rating: null
    },
    {
      orderid: "2002",
      customername: "Raghav",
      restaurant: "Pizza Hut",
      items: [
        { name: "Pepperoni Pizza", price: 14.99, quantity: 1 }
      ],
      totalamount: 14.99,
      status: "Pending",
      deliverytime: null,
      rating: null
    },
    {
      orderid: "2003",
      customername: "Neelesh",
      restaurant: "Burger Man",
      items: [
        { name: "Fries", price: 3.99, quantity: 2 }
      ],
      totalamount: 7.98,
      status: "Pending",
      deliverytime: null,
      rating: null
    }
  ],
  currentOrder: null
};


function orderReducer(state, action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case 'SET_CURRENT_ORDER':
      return {
        ...state,
        currentOrder: action.payload
      };
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.orderid === action.payload.orderid
            ? { ...order, status: action.payload.status }
            : order
        )
      };
    case 'MARK_AS_DELIVERED':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.orderid === action.payload
            ? { ...order, status: 'Delivered' }
            : order
        )
      };
    default:
      return state;
  }
}


export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};