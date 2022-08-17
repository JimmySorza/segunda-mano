import React, { useState } from 'react';
import './styles.scss';
import db from './db.json';

type LoginProps = {};
const emailRegex =
  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const passRegexUpper = /(^(?=.*[A-Z]))/;
const passRegexNumber = /(^(?=.*[0-9]))/;
function Login(props: LoginProps) {
  const [validEmail, setEmailValid] = useState(true);
  const [errorTextPass, setErrorTextPass] = useState('');
  const [errorPassRepeat, setErrorPassRepeat] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [group, setGroup] = useState('signIn');
  const [repeatPass, setRepeatPass] = useState('');
  const isEmail = (value: { target: { value: string } }) =>
    setEmailValid(emailRegex.test(value.target.value));

  const isValidPass = (value: any) => {
    const passUpper = passRegexUpper.test(value.target.value);
    const PassNumber = passRegexNumber.test(value.target.value);
    console.log({ passUpper, PassNumber });
    if (!passUpper && !PassNumber) {
      return setErrorTextPass('La contraseña debe tener al menos una letra mayuscula y un numero');
    } else if (!PassNumber) {
      return setErrorTextPass('La contraseña debe tener al menos un numero');
    } else if (!passUpper) {
      return setErrorTextPass('La contraseña debe tener al menos una letra mayuscula');
    } else {
      setErrorTextPass('');
    }
  };
  const submit = () => console.log(name, pass);
  // @ts-ignore
  const texts = db[group];
  return (
    <div>
      <div className='login-wrapper'>
        <p className='title'>{texts.title}</p>
        <input
          onBlur={(event) => isEmail(event)}
          className='mail'
          type='email'
          placeholder={db.mail}
          onChange={(e) => setName(e.target.value)}
        />
        {!validEmail && <p className='errorText'>Por favor ingresa un email valido</p>}
        <div className='inputWrap'>
          <input
            onBlur={(event) => isValidPass(event)}
            type={showPass ? 'text' : 'password'}
            placeholder={db.pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <p onClick={() => setShowPass(!showPass)} className='show'>
            {showPass ? db.hide : db.show}
          </p>
        </div>
        {errorTextPass && <p className='errorText'>{errorTextPass}</p>}
        {group === 'signUp' && (
          <div className='inputWrap'>
            <input
              onChange={(e) => setRepeatPass(e.target.value)}
              type={showPass ? 'text' : 'password'}
              placeholder={texts.repeatPass}
              onBlur={() => repeatPass !== pass && setErrorPassRepeat('La contraseña no coincide')}
            />
          </div>
        )}
        {errorPassRepeat && <p className='errorText'>{errorPassRepeat}</p>}
        <button onClick={submit} className='Sign'>
          {texts.button}
        </button>
      </div>
      <div className='bottomWrap'>
        <p>
          {texts.question} <span onClick={() => setGroup(texts.to)}>{texts.link}</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
