import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartTwoToneIcon1 from '@mui/icons-material/ShoppingCartTwoTone';
import ShoppingBagTwoToneIcon2 from '@mui/icons-material/ShoppingBagTwoTone';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const ShowProduct = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProducts(res.data);
    }, []);
  }, []);

  if (!product) {
    return (
      <>
      <div class="loader">
  <div class="bar">L</div>
  <div class="bar">O</div>
  <div class="bar">A</div>
  <div class="bar">D</div>
  <div class="bar">I</div>
  <div class="bar">N</div>
  <div class="bar">G</div>
</div>


</>
    )
  }
  return (
    <div className="container">
      <Card sx={{ width: "50%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
           sx={{
    width: "100%",
    height: "400px",
    padding: "20px",
    border: "2px solid #ccc", // 👈 This adds the border
    borderRadius: "8px",      // Optional: Rounded corners
    objectFit: "cover"        // Optional: Better image scaling
  }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label={product.category} size="small" />
            </Stack>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {(product.price * 100).toLocaleString("en-IN")}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
          <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating
              readOnly
              name="hover-feedback"
              value={product.rating.rate}
              precision={0.5}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="outlined" startIcon={<ShoppingCartTwoToneIcon1/>}>
            Cart
          </Button>
          <Button variant="contained" endIcon={<ShoppingBagTwoToneIcon2 />}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ShowProduct;
