import { useEffect } from "react"
import { fetchUsers } from "../app/axios/axios"
import { SingleUser } from "../components/SingleUser"
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { Filter } from "../components/Filter"
import { useParams, useSearchParams } from "react-router-dom"
import { filtered } from "../utils/filter"

export const Users = () => {
  const { name, email, phone } = useParams()
  const [searchParams] = useSearchParams()
  const users = useAppSelector(state => state.users.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadingData = (name: string, email: string, phone: string) => {
      const users = fetchUsers(name)
      dispatch(users)
    }

    loadingData(name || "", email || "", phone || "")
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
