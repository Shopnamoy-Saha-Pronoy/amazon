import React, { createContext, useContext, useReducer } from "react";

// Create a new context object
export const StateContext = createContext();

// StateProvider component that wraps the children components and provides the global state
export const StateProvider = ({ reducer, initialState, children }) => (
  // Use StateContext.Provider to provide the state and dispatch function to its children
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to access the current state value
export const useStateValue = () => useContext(StateContext);
