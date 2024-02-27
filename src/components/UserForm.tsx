import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

type FormProps = {name: string, email: string, isActive: string}

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const isActiveRef = useRef<boolean>();
  //   const OnSubmit = (e: React.DOMAttributes<HTMLFormElement>) => {
  const OnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formies = Object.fromEntries(new FormData(form));

    nameRef.current = formies.name;
    emailRef.current = formies.email;
    isActiveRef.current = formies.isActive == "on";
    console.log(formies);
    
    // console.log(e.target.);
    // console.log(e.target.name.value);

    //Read form inputs and submit the form to the parent
    const newUser = { name: nameRef.current, email: emailRef.current, isActive: isActiveRef.current };
    // const newUser = {name: e.target.name.value as string, email: e.target.email.value as string, isActive:e.target.isActive.checked as boolean}
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
