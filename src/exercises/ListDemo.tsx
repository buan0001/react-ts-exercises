import { BaseProps } from "../types";
import { users, User } from "../data/data";
//import UserTable from "../components/UserTable";
type Props = BaseProps;


export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      {/** Render all users in a table RIGHT HERE */}
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Active?</td>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=> {
                return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive ? "active" : "not"}</td>
                </tr>)
            })}
        </tbody>
      </table>


      {/**After that refactor the table-part into a separate Component and use like this */}
      {/*<UserTable users={users} />*/}


    </>
  );
}
