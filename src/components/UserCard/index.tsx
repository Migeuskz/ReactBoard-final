import "./UserCard.css";
import type { User } from "../../types/users";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={`/src/assets/users/${user.id}.jpg`} alt={user.name} />
      <article>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </article>
    </div>
  );
}
