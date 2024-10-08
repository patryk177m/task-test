import type { User } from "../types/user"

export const filtered = (
  name: string | null,
  username: string | null,
  email: string | null,
  phone: string | null,
  users: User[],
) => {
  let filtered = users
  if (name || username || email || phone) {
    const result = users.filter(
      (user => user.name.toLowerCase().includes(name?.toLowerCase().trim() || "") &&
        user.username.toLowerCase().includes(username?.toLowerCase().trim() || "") &&
        user.email.toLowerCase().includes(email?.toLowerCase().trim() || "") &&
        user.phone.toLowerCase().includes(phone?.toLowerCase().trim() || "")) 
    )

    filtered = result;
  }

  return filtered
}
