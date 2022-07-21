import React from 'react'
import {AppBar,Toolbar,Typography,Container} from '@mui/material'
import BookIcon from "@mui/icons-material/Book"
import { Link } from 'react-router-dom'
function Headers() {
  return (
    <AppBar position="sticky" color="primary">
        <Container maxWidth="lg">
      <Toolbar>
       <Link style={{textDecoration:"none",flex:1,color:"#f7f7f7"}} to="/">
       
        <Typography component="h1" variant="h6" fontWeight="bold" flex={1}>
          وبلاگ 
        </Typography>
       </Link>
      
       
        <BookIcon/>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Headers