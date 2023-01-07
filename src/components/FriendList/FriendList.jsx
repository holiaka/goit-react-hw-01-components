import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}></li>))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}