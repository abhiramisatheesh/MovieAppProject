//import React from 'react'
import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

   
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mobile App
          </Typography>
         <Link to={'/login'} ><Button style={{ color: "white" }} color="inherit">Login</Button></Link>
         <Link to={'/signup'} ><Button style={{ color: "white" }} color="inherit">Sing Up</Button></Link>
         <Link to={'/addmovie'} ><Button style={{ color: "white" }} color="inherit">Add Movie</Button></Link>
         <Link to={'/login'} ><Button style={{ color: "white" }} color="inherit">Logout</Button></Link>
          {/* <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
        
    </div>
    </nav>

  
  )
}

export default Navbar