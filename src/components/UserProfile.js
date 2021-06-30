import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <table border="5" bgcolor="white" align="center">
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
      </table>
    </main>
  );
};

export default UserProfile;