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
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { alignStyle, StyledTableCell } from "../styles/mui-styles"
import { SkeletonUsers } from "../components/SkeletonUsers"
import { getCount } from "../utils/counter"

export const Users = () => {
  const [searchParams] = useSearchParams()
  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

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
    <TableContainer
      sx={{ maxWidth: 1440 }}
      aria-label="customized table"
      className="container"
      component={Paper}
    >
      <Filter />
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align={alignStyle}>Name</StyledTableCell>
            <StyledTableCell align={alignStyle}>User name</StyledTableCell>
            <StyledTableCell align={alignStyle}>Email</StyledTableCell>
            <StyledTableCell align={alignStyle}>Phone</StyledTableCell>
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
