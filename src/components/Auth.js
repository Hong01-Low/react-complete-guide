import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const enterHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.enter());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={enterHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='name' id='name' />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='address' id='address' />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Enter</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;