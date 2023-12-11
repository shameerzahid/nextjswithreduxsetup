
import styles from './page.module.css'
import AddUsers from './components/addUsers'
import DisplayUsers from './components/displayUsers'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
     <AppBar position="static">
  <Toolbar variant="dense">

    <Typography variant="h6" color="inherit" component="div">
      Redux with MUI
    </Typography>
  </Toolbar>
</AppBar>
      <AddUsers />
      <DisplayUsers />
    </main>
  )
}
