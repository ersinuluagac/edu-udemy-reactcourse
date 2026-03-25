import React from "react";

export const users = [
  {
    username: "Arbores",
    email: "arbor@mail.com"
  },
  {
    username: "Surgens",
    email: "surgen@mail.com"
  }
]

function Login() {
  return (
    //Fragment
    <>
      <div>
        <div>
          <p>Kullanıcı Adı:</p>
          <input type="text" />
        </div>
        <div>
          <p>Parola:</p>
          <input type="text" />
        </div>
        <button>Giriş Yap</button>
      </div>
    </>
  );
}

export default Login;
