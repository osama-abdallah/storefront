import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './header.scss'
import { Link } from "react-router-dom";
import { connect } from "react-redux";


 function ButtonAppBar(props) {
  return (
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

          <Link to ="/" style={{textDecoration: "none", color:"white"}}>
          <Button color="inherit" id='store'>
            OUR STORE 
          </Button>
          </Link>

            <Link to = "/cart">
          <Button color="inherit" id='cart'>{`CART (${props.cart.length})`}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const mapStateToProps = (state)=>({
  cart : state.cartReducer
 })
 
 export default connect(mapStateToProps)(ButtonAppBar)