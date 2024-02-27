import { useState, ChangeEvent, useRef } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const isActiveRef = useRef("");
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user });
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name:{" "}
      <input
        name="name"
        value={user.name}
        onChange={e => {
          user.name = e.target.value;
          setUser({ ...user });
        }}
      />
      Email:{" "}
      <input
        name="email"
        value={user.email}
        onChange={e => {
          user.email = e.target.value;
          setUser({ ...user });
        }}
      />
      Active:{" "}
      <input
        type="checkbox"
        checked={user.isActive}
        onChange={e => {
          user.isActive = e.target.checked;
          setUser({ ...user });
        }}
        name="isActive"
      />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}
