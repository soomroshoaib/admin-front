import  {useState} from 'react'
//import Img from '../../../public/image/sing.jpg';


const Register = () => {

  const [user, setuser] = useState({
      username: "",
      email:"",
      phone:"",
      password:"",
    })


    const  handleinput =(e)=>{ 
      console.log(e)

      const {name , value } = e.target
      console.log(e.target.value)
       
      setuser(()=>{
        return{
          ...user,
          [name]:value
        }
      })
    }

    const addUserdata = (e)=>{
      e.preventDefault()
      console.log(user)



  }

    

  
    
  
  return (
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
                <h1 className='mein-heading mb-3'>Registration From </h1>
                <form>
                  <div>
                    <label htmlFor='username'>username</label>
                    <input type='text' 
                    name='username'
                    placeholder='username'
                    id='username'
                    required
                    autoComplete='off' 
                    value={user.username}
                    onChange={handleinput}
                    />
                  </div>

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
                    <label htmlFor='phone'>phone</label>
                    <input type='number' 
                    name='phone'
                    placeholder='phone'
                    id='phone'
                    required
                    autoComplete='off' 
                    onChange={handleinput}
                    value={user.phone}
                    />
                  </div>

                  <div>
                    <label htmlFor='password'>password</label>
                    <input type='text' 
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
  )
}

export default Register