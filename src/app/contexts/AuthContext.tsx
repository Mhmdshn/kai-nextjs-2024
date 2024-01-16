"use client";

import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    id: 1,
    email: "muhammadhshaan@gmail.com",
    name: "Shaan",
    gender: "m",
    livingIn: "Ga. Maamendhoo",
    dob: "05/02/1989",
    role: "premium",
    points: 100,
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
