"use client";
import { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
