import { Profil } from "./Profil/Profil";
import { Statistic } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div
      style={{     
        backgroundColor: "#dddddd",       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#202020'
      }}
    >
      <Profil user={user} />
      <Statistic title="Upload stats" data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
