import Drawer from '@mui/material/Drawer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { setDrawer } from '../redux/appSlice'
import type { ProductType } from '../types/Types'
import Button from '@mui/material/Button'
import { calculateBasket, removeProductFromBasket } from '../redux/basketSlice'

function BasketDetails() {

  const { drawer } = useSelector((state: RootState) => state.app)
  const { basket, totalAmount } = useSelector((state: RootState) => state.basket)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateBasket())
  }, [basket])

  const closeDrawer = () => {
    dispatch(setDrawer(false))
  }

  const removeProduct = (productId: number) => {
    dispatch(removeProductFromBasket(productId))
  }

  return (
    <Drawer open={drawer} anchor='right' sx={{ width: '400px' }} onClose={closeDrawer}>
      {
        basket && basket.map((product: ProductType) => (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '10px 30px' }}>
              <div>
                <img src={product.image} width={60} height={60}></img>
                <div>
                  <div>{product.title.substring(0, 30)}</div>
                  <div>{product.description.substring(0, 40)}</div>
                </div>
                <div>
                  <div>Adet: {product.count}</div>
                  <div>Fiyat: {product.price}₺</div>
                  <div><Button onClick={() => removeProduct(product.id)} size='small' variant='contained'>Çıkar</Button></div>
                </div>
              </div>
            </div>
          </>
        ))
      }
      <div>
        <div>Toplam Tutar: {totalAmount}₺</div>
      </div>
    </Drawer>
  )
}

export default BasketDetails