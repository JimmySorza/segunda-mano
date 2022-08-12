import React, {useState} from 'react';
import './styles.scss'

type LoginProps = {

};
const emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/



function Login(props: LoginProps) {
    const [validEmail, setEmailValid] = useState(true)
    const isEmail = (value: { target: { value: string; }; }) => setEmailValid(emailRegex.test(value.target.value))
    return (
        <div className="login-wrapper">
          <p className="title">Iniciar sesión</p>
            <input onBlur={(event)=>isEmail(event)} className="mail" type="email" placeholder="Tu correo electronico" />
            {!validEmail && <p className="errorText">Por favor ingresa un email valido</p>}
            <input type="password" placeholder="Tu contraseña"/>
        </div>
    );
}

export default Login;
