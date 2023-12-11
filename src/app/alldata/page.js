"use client"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
import { IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function AllPage(){
    const data = useSelector((item) => item.users);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Here we will get all the data on another page in redux</h1>
            <Paper elevation={3} sx={{ backgroundColor: '#1976d2', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" color="white">
        Display Users
      </Typography>
    </Paper>
    <List>
        {
             data.map((item) => (
             <ListItem key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={() => dispatch(removeUser(item.id))} />
                    </IconButton>
                  }
                >
                  <ListItemText
                    // primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  /> {item.name}
                </ListItem>
             ))
        }     
            </List>

            <Link href="/">Back</Link>
        </div>
    )
}