import "../styles/global.css"
import { useSearchParams } from "react-router-dom"
import { getSearchWith } from "../utils/SearchHelper"
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { alignStyle, widthInputSearch } from "../styles/mui-styles"
import { useState } from "react"

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const [userNameError, setUserNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const handleInputChange =
    (
      field: "name" | "username" | "phone",
      setError: React.Dispatch<React.SetStateAction<boolean>>,
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextParams = getSearchWith(searchParams, {
        [field]: e.target.value || null,
      })

      setSearchParams(new URLSearchParams(nextParams))

      if (e.target.validity.valid) {
        setError(false)
      } else {
        setError(true)
      }
    }

  const handleNameChange = handleInputChange("name", setNameError)
  const handleUserNameChange = handleInputChange("username", setUserNameError)
  const handlePhoneChange = handleInputChange("phone", setPhoneError)

  return (
    <TableContainer
      sx={{ maxWidth: 1440 }}
      aria-label="customized table"
      className="container"
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={alignStyle}>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: widthInputSearch } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Search name"
                  variant="filled"
                  type="search"
                  value={searchParams.get("name") || ""}
                  onChange={handleNameChange}
                  error={nameError}
                  inputProps={{
                    pattern: "[A-Za-z ]+",
                  }}
                  helperText={
                    nameError
                      ? "Please enter your name (letters and spaces only)"
                      : ""
                  }
                />
              </Box>
            </TableCell>
            <TableCell align={alignStyle}>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: widthInputSearch } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Search User name"
                  variant="filled"
                  type="search"
                  value={searchParams.get("username") || ""}
                  onChange={handleUserNameChange}
                  error={userNameError}
                  inputProps={{
                    pattern: "[A-Za-z ]+",
                  }}
                  helperText={
                    userNameError
                      ? "Please enter your user name (letters and spaces only)"
                      : ""
                  }
                />
              </Box>
            </TableCell>
            <TableCell align={alignStyle}>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: widthInputSearch } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Search email"
                  variant="filled"
                  type="search"
                  value={searchParams.get("email") || ""}
                  onChange={e => {
                    const nextParams = getSearchWith(searchParams, {
                      email: e.target.value || null,
                    })

                    setSearchParams(new URLSearchParams(nextParams))
                  }}
                />
              </Box>
            </TableCell>
            <TableCell align={alignStyle}>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: widthInputSearch } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Search phone"
                  variant="filled"
                  type="search"
                  value={searchParams.get("phone") || ""}
                  onChange={handlePhoneChange}
                  error={phoneError}
                  inputProps={{
                    pattern: "[0-9 ]+",
                  }}
                  helperText={
                    phoneError ? "Please enter your phone (number only)" : ""
                  }
                />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}
