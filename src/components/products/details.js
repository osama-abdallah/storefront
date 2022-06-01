import React from 'react'
import { connect } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from "react-bootstrap";
import './details.scss'

import {decreaseStock} from '../../store/actions'
import {increment} from '../../store/actions'
import {getDetails} from '../../store/actions'
import { Link } from "react-router-dom";



 function details(props) {
    return (
        <div id="activeCategory">
            {console.log(props.myStore.products)}
            {props.myStore.activeCategory && (
                <div>

                   <h1>{props.myStore.activeCategory.name}</h1>
                   <p>{props.myStore.activeCategory.description}</p>
                </div>
            )}
<Row xs={3} style={{ width: "100%" }}>


{props.myStore.activeCategory && (
  
  props.myStore.products.filter(item=>{
      console.log('ok')
    return  item.category === props.myStore.activeCategory.name
  })
  .map(item=>{
 return (
    <Col>
<Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{props.decreaseStock(item); props.increment({name : item.name , price:item.price})}}>ADD TO CART</Button>
       <Link to="product">
        <Button size="small" onClick={()=>{props.getDetails(item)}}>VIEW DETAILS</Button>
           </Link>
      </CardActions>
    </Card>
    </Col>

    )
 })
)}
</Row>

        </div>
    )
}



const mapStateToProps = (state)=>({
    myStore : state.catReducer

})

const mapDispatchToProps = {decreaseStock,increment,getDetails}


export default connect(mapStateToProps,mapDispatchToProps)(details)