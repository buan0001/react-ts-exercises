import { User } from "../data/data";

// export default function UserTableLifting({ users, editUser }: { users: User[]; editUser: (userId: number) => void }) {
  export default function UserTableLifting({ users, editUser }: { users: User[], editUser: (user:User) => void }) {
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
              <td>
                <button onClick={() => editUser(user)}>Edit user</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
