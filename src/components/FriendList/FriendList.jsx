import PropTypes from 'prop-types';
import {List} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <li key={friend.id}>Hi!</li>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
