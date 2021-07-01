import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.submit());
  };

  return (
    <main className={classes.auth}>
      <h2>-USERS DETAILS-</h2>
      <section>
        <form onSubmit={submitHandler}>
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
          <button>Submit</button>
        </form>
      </section>
---------------------------------------------------------
      <h2>USERS PROFILE MANAGEMENT</h2>
      <table class="lists" id="personalLists" border="2.5" bgcolor="white" align="center">
      <thead>
      <tr>
          <th>NAME</th>
          <th>ADDRESS</th>
          <th>EMAIL</th>
          <th>NO.PHONE</th>
          <th>ACTIONS</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td>Low Chun Hong</td>
          <td>Kuala Lumpur</td>
          <td>junhong@gmail.com</td>
          <td>0167845956</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Low Xin Yee</td>
          <td>Serdang</td>
          <td>xinyee@gmail.com</td>
          <td>0112415641</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Lim Sow Peik</td>
          <td>Bukit Mertajam</td>
          <td>sowpeik@gmail.com</td>
          <td>0135815246</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Tang Yun Kee</td>
          <td>Pulau Pinang</td>
          <td>yunkee@gmail.com</td>
          <td>0162256488</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Lim Shu Fen</td>
          <td>Kulim</td>
          <td>shufen@gmail.com</td>
          <td>0192887522</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Ooi Shin Yi</td>
          <td>Ipoh</td>
          <td>shinyi@gmail.com</td>
          <td>0113523565</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Chong Weng Hin</td>
          <td>Bukit Jalil</td>
          <td>wenghin@gmail.com</td>
          <td>0164752013</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        <tr>
          <td>Teh Hwa Sheng</td>
          <td>Sungai Petani</td>
          <td>hwasheng@gmail.com</td>
          <td>0191852423</td>
          <td><button>Edit</button> | <button>Delete</button></td>
        </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Auth;