import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { alignStyle, StyledTableCell } from "../styles/mui-styles"

export const Header = () => {

  return (
    <TableContainer sx={{ maxWidth: 1440 }}
    aria-label="customized table"
    className="container header"
    component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align={alignStyle}>User Table</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}
