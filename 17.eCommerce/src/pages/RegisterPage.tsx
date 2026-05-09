import React from 'react'
import "../css/RegisterPage.css"
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import { registerPageSchema } from '../schemas/RegisterPageSchema'
import registerPageService from '../services/RegisterPageService'
import type { UserType } from '../types/Types'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {

  const navigate = useNavigate();

  const submit = async (values: any, actions: any) => {
    try {
      const payload: UserType = {
        id: String(Math.floor(Math.random() * 999999)),
        username: values.username,
        password: values.password,
        balance: 1000
      }
      const response = await registerPageService.register(payload)
      if (response) {
        clear();
        toast.success("Kullanıcı kaydedildi.")
        navigate("/login")
      }
    } catch (error) {
      toast.error("Kullanıcı kaydedilirken bir hata oldu!")
    }
  }

  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: submit,
    validationSchema: registerPageSchema
  });

  const clear = () => {
    resetForm()
  }

  return (
    <div className='register'>
      <div className='registerMain'>
        <form onSubmit={handleSubmit}>
          <div className='registerForm'>
            <TextField
              sx={{ margin: '10px' }}
              id="username"
              placeholder='Kullanıcı Adı'
              value={values.username}
              onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoPersonCircleSharp />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
              fullWidth
              helperText={errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            />
            <TextField
              sx={{ margin: '10px' }}
              id="password"
              type='password'
              placeholder='Parola'
              value={values.password}
              onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
              fullWidth
              helperText={errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            />
            <div>
              <Button type='submit' sx={{ textTransform: 'none', margin: '5px' }} variant='contained' color='primary'>
                Kayıt Ol
              </Button>
              <Button onClick={clear} sx={{ textTransform: 'none', margin: '5px' }} variant='outlined' color='secondary'>
                Temizle
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage