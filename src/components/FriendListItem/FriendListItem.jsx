import PropTypes from 'prop-types';
import {
  CardWrapper,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <CardWrapper>
      <FriendStatus isOnline={isOnline}>&#8226;</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </CardWrapper>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({    
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
