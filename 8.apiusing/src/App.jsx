import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASEURL = "http://localhost:3000/";
const newUser = {
  username: "uluagac",
  password: "344",
};

function App() {
  // Get
  const getAllUsers = async () => {
    const response = await axios.get(`${BASEURL}users`);
    console.log(`getAllUsers: ${response.data}`);
  };
  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASEURL}users/${userId}`);
  //   console.log(`getUserById: ${response.data}`);
  // };

  // // Post
  // const createUser = async (newUser) => {
  //   const response = await axios.post(`${BASEURL}users`, newUser);
  //   console.log("response", response.data);
  // };

  // // Put
  // const updateUser = async (userId, updatedUser) => {
  //   await axios.put(`${BASEURL}users/${userId}`, updatedUser);
  // };

  // // Delete
  // const deleteUserById = async (userId) => {
  //   const deletedResponse = await axios.delete(`${BASEURL}users/${userId}`)
  //   console.log(deletedResponse.data);
  // }

  useEffect(() => {
    (
      getAllUsers()
      // getUserById(1),
      // createUser(newUser)
      // updateUser("sakjXb1ZldI", {"username": "Rersin","password": "443"})
      // deleteUserById("caWPS8BHk5c")
    );
  }, []);

  return <div></div>;
}

export default App;
