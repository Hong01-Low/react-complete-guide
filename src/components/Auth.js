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
      <h2>-USERS FORM-</h2>
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
---------------------------------------------------------
      <table>
        <tr>
          <td>Name</td>
          <td>Address</td>
          <td>Email</td>
          <td>Password</td>
        </tr>
        <tr>
          <td>Low Chun Hong</td>
          <td>Kuala Lumpur</td>
          <td>junhong@gmail.com</td>
          <td>20564</td>
        </tr>
        <tr>
          <td>Low Xin Yee</td>
          <td>Serdang</td>
          <td>xinyee@gmail.com</td>
          <td>15641</td>
        </tr>
      </table>
      <h2>My Users Profile</h2>
      <table border="2.5" bgcolor="white" align="center">
      <td>
      <tr>NAME</tr>
      <tr>Low Chun Hong</tr>
      <tr>Low Xin Yee</tr>
      <tr>Ng Tee Jia</tr>
      <tr>Ng Zi Mei</tr>
      <tr>Tang Yun Kee</tr>
      </td>
      <td>
      <tr>ADDRESS</tr>
      <tr>Kuala Lumpur</tr>
      <tr>Serdang</tr>
      <tr>Kulim</tr>
      <tr>Bukit Mertajam</tr>
      <tr>Pulau Pinang</tr>
      </td>
      <td>
      <tr>EMAIL</tr>
      <tr>junhong@gmail.com</tr>
      <tr>xinyee@gmail.com</tr>
      <tr>teejia@gmail.com</tr>
      <tr>zimei@gmail.com</tr>
      <tr>yunkee@gmail.com</tr>
      </td>
      <td>
      <tr>PASSWORD</tr>
      <tr>561561</tr>
      <tr>566012</tr>
      <tr>561980</tr>
      <tr>460564</tr>
      <tr>546156</tr>
      </td>
      <td>
      <tr>ACTIONS</tr>
      <tr><button>Edit</button> | <button>Delete</button></tr>
      <tr><button>Edit</button> | <button>Delete</button></tr>
      <tr><button>Edit</button> | <button>Delete</button></tr>
      <tr><button>Edit</button> | <button>Delete</button></tr>
      <tr><button>Edit</button> | <button>Delete</button></tr>
      </td>
      </table>
    </main>
  );
};

export default Auth;