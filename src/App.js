import './styles/main.scss';

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

function App() {
  return (
    <div className="App">
      <section className="forms-section">
        <h1 class="section-title">Vencejos</h1>
        <div className="forms">
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
                  <input id="login-email" type="email" required/>
                </div>
                <div className="input-block">
                  <label for="login-password">Contraseña</label>
                  <input id="login-password" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Ingresar</button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
               Registrarse
                <span className="underline"></span>
              </button>
              <form className="form form-signup">
                <fieldset>
                  <legend>Ingresa tu corre y contraseña.</legend>
                  <div class="input-block">
                    <label for="signup-email">Correo</label>
                    <input id="signup-email" type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password">Contraseña</label>
                    <input id="signup-password" type="password" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password-confirm">Confirmar contraseña</label>
                    <input id="signup-password-confirm" type="password" required/>
                  </div>
                </fieldset>
                <button type="submit" class="btn-signup">Continuar</button>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
