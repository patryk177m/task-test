import "../styles/global.css"
import { useSearchParams } from "react-router-dom"
import { getSearchWith } from "../utils/SearchHelper"
import {
  Box,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { alignStyle, widthInputSearch } from "../styles/mui-styles"
import { useState } from "react"

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextParams = getSearchWith(searchParams, {
      name: e.target.value || null,
    })

    setSearchParams(new URLSearchParams(nextParams));

    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <Table
      className="container"
      sx={{ maxWidth: 1440 }}
      aria-label="customized table"
    >
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
                onChange={e => {
                  const nextParams = getSearchWith(searchParams, {
                    phone: e.target.value || null,
                  })

                  setSearchParams(new URLSearchParams(nextParams))
                }}
              />
            </Box>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  )
}
