import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, setCurrentUser, setDrawer, setProducts } from '../redux/appSlice';
import { toast } from 'react-toastify';
import productService from '../services/ProductService';
import type { ProductType } from '../types/Types';
import { FaShoppingBasket } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import type { RootState } from '../redux/store';

function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { basket } = useSelector((state: RootState) => state.basket)

  const logout = () => {
    localStorage.removeItem("currentUser")
    dispatch(setCurrentUser(null))
    navigate('/login')
    toast.success("Başarılı bir şekilde çıkış yapıldı.")
  }

  const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.value) {
        dispatch(filterProducts(e.target.value))
      } else {
        const products: ProductType[] = await productService.getAllProducts()
        dispatch(setProducts(products))
      }
    } catch (error) {
      toast.error("Filtreleme yapılamadı!")
    }
  }

  const openDrawer = () => {
    dispatch(setDrawer(true))
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#423534' }}>
      <Toolbar>
        <IconButton
          onClick={() => navigate('/')}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={Logo} width={60} height={60} />
        </IconButton>
        <Typography onClick={() => navigate('/')}
          variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
          Uluağaç
        </Typography>

        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
          sx={{ margin: '1px 25px', }}
          id="search"
          placeholder='Ara'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">

                </InputAdornment>
              ),
              style: {
                color: 'white',
                borderBottom: '1px solid white'
              }
            },
          }}
          variant="standard"
        />
        <Badge onClick={openDrawer} badgeContent={basket.length} color="warning" style={{ margin: '0px 10px', cursor: 'pointer' }}>
          <FaShoppingBasket style={{ fontSize: '18px', cursor: 'pointer' }} />
        </Badge>
        <Button onClick={logout} color="inherit">Çıkış Yap</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar