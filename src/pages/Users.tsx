import { useEffect } from "react"
import { getUsers } from "../app/axios/axios"
import { SingleUser } from "../components/SingleUser"
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"

export const Users = () => {
  const users = useAppSelector(state => state.users.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadData = async () => {
      const data = await getUsers();
      await dispatch(data);
    }

    loadData();
  }, [users.length])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>e-mail</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(user => <SingleUser key={user.id} user={user} />)}
      </tbody>
    </table>
  )
}
