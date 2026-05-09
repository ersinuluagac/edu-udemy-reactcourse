import "../css/LoginPage.css"
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import { registerPageSchema } from '../schemas/RegisterPageSchema'
import loginPageService from "../services/LoginPageService"
import { useDispatch } from "react-redux"
import { setCurrentUser, setLoading } from "../redux/appSlice"
import type { UserType } from "../types/Types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

interface CheckUserType {
  result: boolean,
  currentUser: UserType | null
}

function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkUser = (userList: UserType[], username: string, password: string): CheckUserType => {
    const response: CheckUserType = { result: false, currentUser: null }
    userList.forEach((user: UserType) => {
      if (user.username === username && user.password === password) {
        response.result = true
        response.currentUser = user
      }
    })

    return response
  }

  const submit = async (values: any, actions: any) => {
    try {
      dispatch(setLoading(true))
      const response: UserType[] = await loginPageService.login();
      if (response) {
        const checkUserResponse: CheckUserType = checkUser(response, values.username, values.password)
        if (checkUserResponse.result && checkUserResponse.currentUser) {
          dispatch(setCurrentUser(checkUserResponse.currentUser))
          localStorage.setItem("currentUser", JSON.stringify(checkUserResponse.currentUser))
          navigate("/")
        } else {
          toast.error("Kullanıcı adı veya parola hatalı!")
        }
      }
    } catch (error) {
      toast.error("Giriş yapılırken hata oldu: " + error)
    } finally {
      dispatch(setLoading(false))
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
    <div className='login'>
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
                Giriş Yap
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

export default LoginPage