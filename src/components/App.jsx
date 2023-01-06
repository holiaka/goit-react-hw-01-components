import { Profil } from "./Profil/Profil";
import user from "../data/user.json"

export const App = () => {
  return (
    <div
      style={{     
        backgroundColor: "#dddddd",
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profil user = {user}/>
    </div>
  );
};
