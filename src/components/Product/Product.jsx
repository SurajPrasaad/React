import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Typography from '@mui/material/Typography';
import {Link} from "react-router";


const Product = (props)=> {
  return (
    <div className='container'>
    <Card 
  sx={{ 
    width: 300,           // Fixed width
    height: 400,          // Fixed height
    borderRadius: 4, 
    boxShadow: 3, 
    overflow: 'hidden', 
    display: 'flex', 
    flexDirection: 'column',
    transition: '0.3s',
    '&:hover': { boxShadow: 6 }
  }}
>
  <div style={{ position: 'relative' }}>
  <CardMedia
    component="img"
    alt={props.title}
    image={props.image}
    sx={{ 
      height: 180,
      objectFit: 'cover'
    }}
  />
  <FavoriteTwoToneIcon 
    sx={{
      position: 'absolute',
      top: 8,
      right: 8,
      color: 'red',
      backgroundColor: 'white',
      borderRadius: '50%',
      padding: '8px',
      fontSize: '2.5rem'
    }}
  />
</div>
  
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" fontWeight="bold" noWrap>
      {props.title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      ₹ {Number(props.price * 100).toLocaleString('en-IN')}
    </Typography>
    <Typography 
      variant="body2" 
      color="text.secondary" 
      sx={{ mt: 1 }} 
      noWrap
    >
      {props.description && props.description.substring(0, 50)}...
    </Typography>
  </CardContent>
  <CardActions sx={{ px: 2, pb: 2 }}>
    <Button 
      variant="outlined" 
      component={Link} 
      to={`/product/${props.id}`} 
      size="small"
      sx={{ textTransform: 'none', borderRadius: 2 }}
    >
      View
    </Button>
  </CardActions>
</Card>
</div>
  );
}

export default Product;
