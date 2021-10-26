import './styles/main.scss';
import Axios from 'axios';
import React, {useState} from 'react';


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})




function App() {

  //Login
  const [EmailLog, setEmailLog] = useState("")
  const [passwordLog, setPasswordLog] = useState("")

  const login = () =>{
    Axios.post('http://localhost:3000/login', 
    {
      mail: EmailLog,
      password: passwordLog
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message)  
      }else{
        setLoginStatus(response.data[0].firstName) 
      }
    })
  }

  //error msg
  const [loginStatus, setLoginStatus] = useState("");

  //register
  const [usernameReg, setUserNameReg] = useState("") 
  const [userLastNameReg, setUserLastNameReg] = useState("")
  const [userPhoneReg, setUserPhoneReg] = useState("")
  const [EmailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  
  const register = () =>{
    Axios.post('http://localhost:3000/register', 
    {
      firstName: usernameReg,
      lastName: userLastNameReg,
      phone: userPhoneReg,
      mail: EmailReg,
      password: passwordReg
    }).then((response)=>{
      console.log(response)
    })
  }
  

  


  return (
    <div className="App">
      <section className="forms-section">
        <h1 class="section-title">Vencejos</h1>
        <div className="forms">

          {/*Login*/}
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Ingresar
              <span className="underline"></span>
            </button>
            <form className="form form-login">
              <fieldset>
                <legend>Ingresa tu correo y contraseña.</legend>
                <div className="input-block">
                  <label for="login-email">Correo</label>
                  <input id="login-email" type="email" required 
                  onChange={(e)=> {
                    setEmailLog(e.target.value)
                    }}/>
                </div>
                <div className="input-block">
                  <label for="login-password">Contraseña</label>
                  <input id="login-password" type="password" required
                  onChange={(e)=> {
                    setPasswordLog(e.target.value)
                    }}/>
                </div>
              </fieldset>
              <button type="submit" className="btn-login" 
              onClick={login}>Ingresar</button>
            </form>

            <h1>{loginStatus}</h1>
          </div>




          {/*Register*/}
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
               Solicitar Acceso
                <span className="underline"></span>
              </button>
              <form className="form form-signup">
                <fieldset>
                  <legend>Ingresa los datos solicitados.</legend>
                  <div className="input-block">
                    <label for="signup-name">Nombre</label>
                    <input id="signup-name" type="text" required 
                    onChange={(e)=> {
                      setUserNameReg(e.target.value)
                      }}/>
                  </div>
                  <div className="input-block">
                    <label for="signup-name">Apellido</label>
                    <input id="signup-name" type="text" required 
                    onChange={(e)=> {
                      setUserLastNameReg(e.target.value)
                      }}/>
                  </div>
                  <div className="input-block">
                    <label for="signup-phone">Telefono</label>
                    <input id="signup-phone" type="phone" required 
                    onChange={(e)=> {
                      setUserPhoneReg(e.target.value)
                      }}/>
                  </div>
                  <div className="input-block">
                    <label for="signup-email">Correo</label>
                    <input id="signup-email" type="email" required 
                    onChange={(e)=> {
                      setEmailReg(e.target.value)
                      }}/>
                  </div>
                  <div className="input-block">
                    <label for="signup-password">Contraseña</label>
                    <input id="signup-password" type="password" required
                    onChange={(e)=> {
                      setPasswordReg(e.target.value)
                      }}/>
                  </div>
                  <div className="input-block">
                    <label for="signup-password-confirm">Confirmar contraseña</label>
                    <input id="signup-password-confirm" type="password" required/>
                  </div>
                </fieldset>
                <button type="submit" className="btn-signup" onClick={register}>Solicitar</button>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
