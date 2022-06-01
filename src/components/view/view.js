import React from 'react'
import { connect } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './view.scss'
function view(props) {
    console.log(props.view);
    let newArr = props.view.products.filter(item=>{
      return  item.name === props.view.activeCategory.name
    })
    console.log(newArr);

    return (
        <div id="view">
            <h1>{newArr[0].name}</h1>

            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={newArr[0].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {`In Stock ${newArr[0].inventoryCount}             $ ${newArr[0].price}`}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

    <Button variant="contained" disableElevation>
      Buy
    </Button>

    <h1>Related Item</h1><br/>
    <h1>Product Details</h1>

        </div>
    )
}





const mapStateToProps = (state)=>({
    view : state.productReducer

})



export default connect(mapStateToProps)(view)