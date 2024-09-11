import { TableCell, tableCellClasses, TableRow } from "@mui/material"
import styled from "@emotion/styled"
import Skeleton from "@mui/material/Skeleton"
import { alignStyle, animation } from "../styles/mui-styles"

export const SkeletonUsers = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "grey",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }))

  return (
    <StyledTableRow>
      <StyledTableCell align={alignStyle}>
        <Skeleton animation={animation} />
      </StyledTableCell>
      <StyledTableCell align={alignStyle}>
        <Skeleton animation={animation} />
      </StyledTableCell>
      <StyledTableCell align={alignStyle}>
        <Skeleton animation={animation} />
      </StyledTableCell>
      <StyledTableCell align={alignStyle}>
        <Skeleton animation={animation} />
      </StyledTableCell>
    </StyledTableRow>
  )
}
