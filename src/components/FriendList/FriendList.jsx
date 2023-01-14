import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
