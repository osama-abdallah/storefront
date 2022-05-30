import React from 'react'
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {actualData} from '../../store/actions'

 function categories(props) {
    return (
        <div>
            <h1>Browse our Categories</h1>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          m: 1,
        },
      }}
    >
         <ButtonGroup variant="text" aria-label="text button group">
            
           {props.myStore.categories.map((item)=>(
               <Button onClick={()=>
                {
                    console.log('----------------');
                props.actualData(item)
                 }
            
            }
             key={item.name}
             >
                 {item.name}
                 </Button>
           ))}
      </ButtonGroup>
    </Box>
        </div>
    )
}

const mapStateToProps = (state)=>({
myStore : state.reducer
})


const mapDispatchToProps = {actualData}

export default connect(mapStateToProps,mapDispatchToProps)(categories)