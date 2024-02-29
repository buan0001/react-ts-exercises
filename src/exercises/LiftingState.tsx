import UserFormControlled from "../components/UserFormControlled";
// import UsertableLif from "../components/UserTable";
import "../liftingState.css"
import { BaseProps } from "../types";

import { users, User, getNextId } from "../data/data";
import { useState } from "react";
import UserTableLifting from "../components/UserTableLifting";

type liftType = BaseProps;

export default function LiftingState({ title }: liftType) {
  const [controlledUsers, setControlledUsers] = useState<User[]>(users);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);


  function AddEditDeleteFunction(user: User, isDelete: boolean | undefined) {
    if (isDelete) {
      setControlledUsers([...controlledUsers].filter((oldUser) => oldUser.id != user.id));
      console.log("deleting");
      
    } else {
      const found = controlledUsers.find((entry) => user.id == entry.id);
      if (found) {
        for (const key in user) {
          found[key] = user[key];
        }
      } else {
        user.id = getNextId();
        controlledUsers.push(user);
      }
      
      
      setControlledUsers([...controlledUsers]);
    }
  }

  function EDIT(usr: User) {
    console.log(usr);
    const newUser = { ...usr };
    console.log("new usr?", newUser);

    setUserToEdit({ ...usr });
    // console.log("user to edit",userToEdit);
    console.log("controlled users", controlledUsers);
    // write a function to edit the user
    
  }

  return (
    <>
      <h2>{title}</h2>
      {/* {userToEdit&& Object.entries(userToEdit).map((entry) => {return <p>{entry[0]} {entry[1]}</p>})} */}
      <div style={{ width: "100%" }}>
        <UserFormControlled defaultUser={userToEdit} onSubmitUser={AddEditDeleteFunction}></UserFormControlled>
        <UserTableLifting users={controlledUsers} editUser={EDIT}></UserTableLifting>
      </div>
    </>
  );
}
