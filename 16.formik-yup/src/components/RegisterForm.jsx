import React from 'react'
import { useFormik } from 'formik'
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: '',
    },
    validationSchema: registerFormSchemas
  });
  console.log()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type='text'
            id='email'
            placeholder='Email giriniz.'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Yaş</label>
          <input
            type='number'
            id='age'
            placeholder='Yaşınızı giriniz.'
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Şifre</label>
          <input
            type='password'
            id='password'
            placeholder='Şifrenizi giriniz.'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Şifre Tekrarı</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Şifrenizi tekrar giriniz.'
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <input
              style={{ width: '20px', height: '12px' }}
              type='checkbox'
              id='term'
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini kabul ediyorum.</label>
            {errors.term && <p>{errors.term}</p>}
          </div>
        </div>
        <button type='submit' >Kaydet</button>
      </form>
    </div>
  )
}

export default RegisterForm