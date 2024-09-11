import "../styles/global.css"
import { useEffect } from "react"
import { fetchUsers } from "../app/axios/axios"
import { SingleUser } from "../components/SingleUser"
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { Filter } from "../components/Filter"
import { useSearchParams } from "react-router-dom"
import { filtered } from "../utils/filter"
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { alignStyle } from "../styles/mui-styles"
import { SkeletonUsers } from "../components/SkeletonUsers"
import { getCount } from "../utils/counter"

export const Users = () => {
  const [searchParams] = useSearchParams()
  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  //style MUI

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  useEffect(() => {
    const loadingData = () => {
      const users = fetchUsers()
      dispatch(users)
    }

    loadingData()
  }, [
    searchParams.get("name"),
    searchParams.get("username"),
    searchParams.get("email"),
    searchParams.get("phone"),
  ])

  const showUsers = filtered(
    searchParams.get("name"),
    searchParams.get("username"),
    searchParams.get("email"),
    searchParams.get("phone"),
    users.value,
  )

  return (
    <TableContainer className="tablecontainer" component={Paper}>
      <Filter />
      <Table
        sx={{ maxWidth: 1440 }}
        aria-label="customized table"
        className="container"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align={alignStyle}>Name</StyledTableCell>
            <StyledTableCell align={alignStyle}>User name</StyledTableCell>
            <StyledTableCell align={alignStyle}>email</StyledTableCell>
            <StyledTableCell align={alignStyle}>phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.isLoading && users.value.length === 0
            ? getCount(10).map(count => <SkeletonUsers key={count} />)
            : showUsers.map(user => <SingleUser key={user.id} user={user} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
