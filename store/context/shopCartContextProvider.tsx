"use client"

import React, { useReducer, useState } from 'react'
import { ShopCartContext, ShopCartInterface } from './shopCartContext'

interface State {
  items: ShopCartInterface[]
}

type Action = {
  type: "ADD_ITEM" | "UPDATE_ITEM" | "REMOVE_ITEM",
  payload: ShopCartInterface | number
}

const shopCartReducer = (state: State, action: Action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.items]
    newItems.push(action.payload as ShopCartInterface)
    console.log(newItems)
    return {
      ...state,
      items: newItems
    }
  }
  return state;
}

// Initial State
const initShopCartState: State = {
  items: []
};

const ShopCartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shopCartState, shopCartDispatch] = useReducer(shopCartReducer, initShopCartState);

  const handleAddItemToCart = () => {
    shopCartDispatch({
      type: "ADD_ITEM",
      payload: {
        name: `Product ${shopCartState.items.length + 1}`
      }
    })
  }
  
  const ctxValue = {
    items: shopCartState.items,
    addItemToCart: handleAddItemToCart
  }
  return (
    <ShopCartContext.Provider value={ctxValue}>
      { children }
    </ShopCartContext.Provider>
  )
}

export default ShopCartContextProvider