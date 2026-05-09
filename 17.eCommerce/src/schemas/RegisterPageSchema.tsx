import * as yup from 'yup'

export const registerPageSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı adı alanı boş olamaz!"),
  password: yup.string().required("Parola alanı boş olamaz!")
})