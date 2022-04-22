import React from 'react'
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import './Loading.scss'
const Loading = () => {
  return (
    <Stack className='loading' sx={{ color: "rgb(80, 1, 113)" }} spacing={20} direction="column" >
      <CircularProgress color="secondary" />

    </Stack>
  )
}

export default Loading
