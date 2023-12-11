"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"
import { IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function DisplayUsers() {
    const userData = useSelector((data) => data.users); //here we are getting the data from redux using useselector and users is where our added users are stored and we have declared them in slice.
    // console.log(userData);
    const dispatch = useDispatch(); //for remove button
    const [secondary, setSecondary] = useState(false);


    return (
        <div>
             <Paper elevation={3} sx={{ backgroundColor: '#1976d2', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" color="white">
        Display Users
      </Typography>
    </Paper>
    <List>
        {
             userData.map((item) => (
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


            
            {/* {
                userData.map((item) => (
                    <div key={item.id}>
                        <span>
                        {item.name}
                        </span>
                        <button onClick={() => dispatch(removeUser(item.id))}>remove</button>
                    </div>
                ))
            } */}
        </div>
    )
}