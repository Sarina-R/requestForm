import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";

export interface user {
  id: number;
  userName: string;
  pwd: string;
  email: string;
  name: string;
  lastName: string;
}

interface Users {
  users: user[];
  setUsers: React.Dispatch<React.SetStateAction<user[]>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<Users | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    axios
      .get("/users.json")
      .then((response) => {
        console.log("Fetched users:", response.data); // checking
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
