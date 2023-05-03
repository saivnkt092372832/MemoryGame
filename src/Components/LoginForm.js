import { useState,useEffect } from 'react';
import style from './LoginForm.module.css';
import  auth  from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Authentication from './Authentication';
import { onAuthStateChanged } from 'firebase/auth';
import Clue from './Clue';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const[error,setError]=useState(32)
  const [password, setPassword] = useState('');
  const [authUser,setAuthUser]=useState(null);
  const [lol,setLol]=useState(false);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }
            else
            {
                setAuthUser(null);
            }
        })
    },[])
    
    
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((response)=>{
        setError(76)
    }).catch((erro)=>{alert(erro)})
    setLol(true)
  };
  useEffect(()=>{
    if(error===76)
    navigate('/')
  },[error])

console.log(authUser);
  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>Login</h2>
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
     {/* {lol && <Clue title="OOPS!!" msg="PLEASE CHECK YOUR USERNAME AND PASSWORD "></Clue>} */}
    </div>
    
  );
};

export default LoginForm;