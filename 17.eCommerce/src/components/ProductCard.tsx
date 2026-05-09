import React from 'react'
import type { ProductType } from '../types/Types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: ProductType
}

function ProductCard(props: ProductCardProps) {
  const { id, title, price, description, category, image, rating } = props.product;

  const navigate = useNavigate();

  return (
    <Card sx={{ cursor: 'pointer', boxShadow: '1px 5px 5px lightgrey', width: '330px', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '40px 10px' }}>
      <CardMedia
        sx={{ height: 250, width: 250 }}
        image={image}
        title={title}
      />
      <CardContent sx={{ height: '250px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description.substring(1, 200)}...
        </Typography>
      </CardContent>
      <Typography
        component="div"
        sx={{ color: 'text.secondary' }}
      >
        {price}₺
      </Typography>
      <CardActions>
        <Button onClick={() => navigate("/product-detail/" + id)} size="small" variant='outlined' color='info'>İncele</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard