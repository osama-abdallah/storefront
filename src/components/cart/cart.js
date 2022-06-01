import React from 'react'
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cart.scss'
const ariaLabel = { 'aria-label': 'description' };


 function cart(props) {
   let total
     console.log(props.cartt);
     let totalArr = props.cartt.map(item =>{
       return item.price
     })
     if(totalArr.length > 0){
      total = totalArr.reduce((a,b)=>{
       return a+b
     })
    }else{total = 0}
    return (
        
        <div id="cart">


           


           
            
      
                                                     

                                                     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='center'>
        Order summary
        </Typography>
        <Typography variant="h5" component="div">
             {props.cartt.map(item=>{
              
                   return `${item.name}               $${item.price}`
              })}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {`TOTAL                $${total}`}        </Typography>
              
        <Typography variant="body2">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Full Name" inputProps={ariaLabel} />
      <Input placeholder="Address" inputProps={ariaLabel} />
      <Input placeholder ="City" inputProps={ariaLabel} />
      <Input placeholder="State"  inputProps={ariaLabel} />
      <Input placeholder="Credit Card"  inputProps={ariaLabel} />
      <Input placeholder="Expiration"  inputProps={ariaLabel} />
      <Input placeholder="CVV"  inputProps={ariaLabel} />

    </Box>
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" disableElevation className='center'>
      Place Your Order
    </Button>
      </CardActions>
    </Card>





            
        </div>
    )
}


const mapStateToProps = (state)=>({
 cartt : state.cartReducer
})

export default connect(mapStateToProps)(cart)