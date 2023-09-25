import { useEffect, useState } from 'react';
import style from './LoginForm.module.css';
import  auth  from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Clue from './Clue';
import { useDispatch } from 'react-redux';
import { scoreActions } from '../store/scores';
let error=45;
const SignupForm = () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit,setSubmit]=useState(false);
  const [error,setError]=useState(34)
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((response)=>{
       setError(56);
    }).catch((erro)=>{
      alert(erro)
      console.log(erro)
  })
   setSubmit(true);
  };
  const dispatch=useDispatch()
useEffect(()=>{
    if(submit && error===56)
    {
      dispatch(scoreActions.setEmail(email));
    navigate('/');
    }
    console.log(submit)
    console.log(error)
},[submit,error])
  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>SignUp</h2>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>Email address:</label>
          <input
            type="email"
            id="email"
            className={style.input}
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password" className={style.label}>Password:</label>
          <input
            type="password"
            id="password"
            className={style.input}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className={style.submitButton}>Log in</button>
      </form>
    
      
    </div>
  );
};

export default SignupForm;