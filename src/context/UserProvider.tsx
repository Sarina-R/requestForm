import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";

interface User {
  id: number;
  userName: string;
  pwd: string;
  email: string;
  name: string;
  lastName: string;
}

interface Users {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<Users | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

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
