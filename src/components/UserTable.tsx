import { User } from "../data/data";

type tt = {users: User[]}

export default function UserTable({users}:tt) {
    return (
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
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "active" : "not"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}