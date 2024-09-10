import type { User } from "../types/user"

export const filtered = (
  name: string | null,
  email: string | null,
  phone: string | null,
  users: User[],
) => {
  let filtered = users
  if (name || email || phone) {
    const result = users.filter(
      (user => user.name.toLowerCase().includes(name?.toLowerCase() || "") &&
        user.email.toLowerCase().includes(email?.toLowerCase() || "") &&
        user.phone.toLowerCase().includes(phone?.toLowerCase() || "")) 
    )

    filtered = result;
  }

  return filtered
}
