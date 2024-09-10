import { useEffect } from "react"
import { fetchUsers } from "../app/axios/axios"
import { SingleUser } from "../components/SingleUser"
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { Filter } from "../components/Filter"
import { useSearchParams } from "react-router-dom"
import { filtered } from "../utils/filter"

export const Users = () => {
  
  const [searchParams] = useSearchParams()
  const users = useAppSelector(state => state.users.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadingData = () => {
      const users = fetchUsers()
      dispatch(users)
    }

    loadingData()
  }, [
    searchParams.get("name"),
    searchParams.get("email"),
    searchParams.get("phone"),
  ])

  const showUsers = filtered(
    searchParams.get("name"),
    searchParams.get("email"),
    searchParams.get("phone"),
    users,
  )

  return (
    <>
      <Filter />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {showUsers.map(user => (
            <SingleUser key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  )
}
