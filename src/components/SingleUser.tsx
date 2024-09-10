import type { User } from "../types/user"

type Props = {
  user: User;
}

export const SingleUser: React.FC<Props> = ({ user }: Props) => {
  
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  )
}
