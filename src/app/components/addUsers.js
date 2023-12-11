"use client"
import { useState } from "react"
import { addUser } from "../redux/slice"
import { useDispatch } from "react-redux"
import SendIcon from '@mui/icons-material/Send';

import Link from "next/link"
import { Button, Paper, Stack, TextField, Typography } from "@mui/material"
export default function AddUsers() {
    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const userDispatch  = () => {
        dispatch(addUser(name));
        }
    return (
        <div>
             <Paper elevation={3} sx={{ backgroundColor: '#1976d2', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" color="white">
        Add Users
      </Typography>
    </Paper>
    <Stack sx={{margin: '30px'}} direction="row" spacing={2}>
    <TextField  id="outlined-basic" label="Enter user" variant="outlined"  onChange={(e) => setName(e.target.value)} />
    <Button variant="contained" endIcon={<SendIcon />} onClick={userDispatch}>Send</Button>
    </Stack>
    {/* <Link  href="/alldata" variant="body2">
  {'variant="body2"'}
</Link> */}
            <Link style={{paddingLeft: '125px'}}  href="/alldata">Go to new Page</Link>
        </div>
    )
}