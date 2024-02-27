import { User } from "../data/data";

export default function UserTable({ users }:{users:User[]}) {
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
        {users.map(user => {
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
