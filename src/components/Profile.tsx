import { BaseProps } from "../types";
export default function Profile({ name, email, isActive, singleLine }: BaseProps) {
  return (
    <div>
      {singleLine ? (
        <div>
          <div><b>Name:</b> {name}</div>
          <div>Email: {email}</div>
          <div>Active? {isActive ? "yes" : "no"}</div>
        </div>
      ) : (
        <div>
          <div>
            Name: {name} Email: {email} Active? {isActive ? "yes" : "no"}
          </div>
        </div>
      )}
    </div>
  );
}
