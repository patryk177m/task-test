import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import type { User } from "../types/user"
import { alignStyle } from "../styles/mui-styles";

type Props = {
  user: User;
}

export const SingleUser: React.FC<Props> = ({ user }: Props) => {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <StyledTableRow>
      <StyledTableCell align={alignStyle}>{user.name}</StyledTableCell>
      <StyledTableCell align={alignStyle}>{user.email}</StyledTableCell>
      <StyledTableCell align={alignStyle}>{user.phone}</StyledTableCell>
    </StyledTableRow>
  )
}
