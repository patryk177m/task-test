import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const alignStyle = 'center';
export const animation = 'wave';
export const widthInputSearch = "35ch"


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: '1.5rem',
    opacity: '0.6',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14, 
  },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));