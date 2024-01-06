import React from 'react'
import {useState} from 'react';

const Login = () => {
  const [user, setuser] = useState({
  
    email:"",
    
    password:"",
  })
  const  handleinput =(e)=>{ 
    // console.log(e)

    const {name , value } = e.target
    // console.log(e.target.value)
     
    setuser(()=>{
      return{
        ...user,
        [name]:value
      }
    })
  }

  const addUserdata = async(e)=>{
    e.preventDefault()
    console.log(user)


}

  return (
    <>
    <section>
      <main>
        <div className='section-register'>
          <div className="container">
            <div className="registration grid grid-two-cols">
              <div className="registration-img">
                {/* <img src={Img} alt="image is not working"
                width="500" height="500" /> */}
              </div>
              {/* useing from  */}
              <div className="container-from">
                <h1 className='mein-heading mb-3'>Login From </h1>
                <form>
                 

                  <div>
                    <label htmlFor='email'>email</label>
                    <input type='email' 
                    name='email'
                    placeholder='Enter your email '
                    id='email'
                    required
                    autoComplete='off' 
                    onChange={handleinput}
                    value={user.email}
                    />
                  </div>

           

                  <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' 
                    name='password'
                    placeholder='password'
                    id='password'
                    required
                    autoComplete='off' 
                    onChange={handleinput}
                    value={user.password}
                    />
                  </div>
                  <button type='submit' className='btn btn-submit' onClick={addUserdata}>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login