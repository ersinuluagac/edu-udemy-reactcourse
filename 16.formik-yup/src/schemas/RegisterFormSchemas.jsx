import * as yup from 'yup'

export const registerFormSchemas = yup.object().shape({
  email: yup.string().email("Geçerli email adresi giriniz.").required("Email adresi zorunludur."),
  age: yup.number().positive("Pozitif bir değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunludur."),
  password: yup.string().required("Şifre alanı zorunludur."),
  confirmPassword: yup.string().required("Şifre tekrar alanı zorunludur.").oneOf([yup.ref('password', yup.password)]),
  term: yup.boolean().required("Lütfen kutuyu onaylayınız")
})