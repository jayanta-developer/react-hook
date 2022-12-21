import React, { useState } from 'react'
import { Button, Chip, FormControl, InputLabel, Select, MenuItem, TextField, Container, Box, Typography } from "@mui/material";

const inputStyle = {
  backgroundColor: "white",
  borderRadius: 0.5,
  opacity: 1,
  fontSize: "19px",
  width: 300,
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#F5D268",
    },
  },
};

export default function Service() {
  const [org, setOrg] = useState({
    name: ""
  })

  const handelChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Container maxWidth="sm">
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Box sx={{ width: 120 }}>
              <Typography pt={1}>Organization name:</Typography>
            </Box>
            <TextField
              sx={{ ...inputStyle }}
              placeholder="Name"
              name="name"
              onChange={handelChange}
              value={org.name ? org.name : ""}
            />
          </Box>
        </Box>

      </Container>

    </>
  )
}
