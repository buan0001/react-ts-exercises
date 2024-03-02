import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const isActiveRef = useRef<boolean>();
  
  const OnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formies = Object.fromEntries(new FormData(form));

    nameRef.current = formies.name as string;
    emailRef.current = formies.email as string;
    isActiveRef.current = formies.isActive == "on";
    console.log(formies);
    
    const newUser = { name: nameRef.current, email: emailRef.current, isActive: isActiveRef.current };
    onSubmitUser(newUser);
  };
  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={OnSubmit}>
        First Name: <input name="name" />
        Email: <input name="email" />
        Active: <input type="checkbox" name="isActive" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
