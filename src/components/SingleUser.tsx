
import type { User } from "../types/user"
import { alignStyle, StyledTableCell, StyledTableRow } from "../styles/mui-styles";

type Props = {
  user: User;
}

export const SingleUser: React.FC<Props> = ({ user }: Props) => {

  return (
    <StyledTableRow>
      <StyledTableCell align={alignStyle}>{user.name}</StyledTableCell>
      <StyledTableCell align={alignStyle}>{user.username}</StyledTableCell>
      <StyledTableCell align={alignStyle}>{user.email}</StyledTableCell>
      <StyledTableCell align={alignStyle}>{user.phone}</StyledTableCell>
    </StyledTableRow>
  )
}
