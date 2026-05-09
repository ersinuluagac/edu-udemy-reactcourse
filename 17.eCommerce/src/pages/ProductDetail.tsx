import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import productService from '../services/ProductService';
import type { ProductType } from '../types/Types';
import Button from '@mui/material/Button';
import { addProductToBasket } from '../redux/basketSlice';



function ProductDetail() {

  const { productId } = useParams();
  const dispatch = useDispatch();

  const [count, setCount] = useState<number>(0)
  const [product, setProduct] = useState<ProductType | null>()

  const getProductById = async (productId: number) => {
    try {
      dispatch(setLoading(true))
      const product: ProductType = await productService.getProductById(productId)
      setProduct(product)
    } catch (error) {
      toast.error("Ürün bilgileri yüklenemedi!")
    } finally {
      dispatch(setLoading(false))
    }
  }

  const addBasket = () => {
    if (product) {
      const payload: ProductType = {
        ...product,
        count: count
      }
      dispatch(addProductToBasket(payload))
      toast.success("Ürün sepete eklendi.")
    }
  }

  useEffect(() => {
    getProductById(Number(productId))
  }, [])

  return (
    <Container maxWidth="lg">
      {product && <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: '60px' }}>
          <div>
            <img src={product.image} width={250} height={400} alt="" />
          </div>
          <div>
            <div style={{ marginLeft: '60px' }}>
              <div style={{ fontFamily: 'arial', fontWeight: 'bolder', fontSize: '20px' }}>{product.title}</div>
              <div style={{ fontFamily: 'arial', fontSize: '16px', marginTop: '25px' }}>{product.description}</div>
              <div style={{ fontFamily: 'arial', fontSize: '20px', fontWeight: 'bold', marginTop: '25px' }}>{product.price}₺</div>
              <div>
                <span onClick={() => setCount(count - 1)} style={{ fontSize: '40px', fontWeight: 'bold', cursor: 'pointer', marginRight: '40px' }}>-</span>
                <span style={{ fontSize: ' 30px' }}>{count}</span>
                <span onClick={() => setCount(count + 1)} style={{ fontSize: '40px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '40px' }}>+</span>
              </div>
              <div>
                <Button onClick={addBasket} color='info' variant='contained' style={{ marginTop: '10px' }}>Sepete Ekle</Button>
              </div>
            </div>
          </div>
        </div>
      </>}
    </Container>
  )
}

export default ProductDetail