'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const handleSubmit = async(e) => {
      e.preventDefault()
  
      if(username === '' || email === '' || password === ''){
          toast.error("Fill all fields")
          return
      }
  
      if(password.length < 6){
          toast.error("Password must be at least 6 characters")
          return
      }
  
      try {
          const res = await fetch('http://localhost:3000/api/register', {
              headers: {
                  'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({username, email, password})
          })
  
          console.log(await res.json())
          if(res.ok){
              toast.success("Successfully registered the user")
              setTimeout(() => {
                  signIn()
              }, 1500)
              return
          } else {
              toast.error("Error occured while registering")
              return
          }
      } catch (error) {
          console.log(error)
      }
    }
  return (
    <section>
        <h2>Register</h2>
        <div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button >Register</button>
                    <button onClick={() => signIn()}>
                        Don&apos;t have an account? <br /> Register now.
                    </button>
                </form>
            </div>
            <ToastContainer />
    </section>
  )
}

export default Register