import PropTypes from 'prop-types';
import {
  ProfilCard,
  UserInformation,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  SocialData,
  SocialStatName,
  SocialStatValue,
} from './Profil.styled';

export const Profil = ({
  user: {
    username ="Stranger",
    tag,
    location,
    avatar,
    stats: { followers = "No data", views = "No data", likes = "No data"},
  },
}) => {
  return (
    <ProfilCard>
      <UserInformation>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInformation>
      <SocialData>
        <div>
          <SocialStatName>Followers</SocialStatName>
          <SocialStatValue>{new Intl.NumberFormat().format(followers)}</SocialStatValue>
        </div>
        <div>
          <SocialStatName>Views</SocialStatName>
          <SocialStatValue>{new Intl.NumberFormat().format(views)}</SocialStatValue>
        </div>
        <div>
          <SocialStatName>Likes</SocialStatName>
          <SocialStatValue>{new Intl.NumberFormat().format(likes)}</SocialStatValue>
        </div>
      </SocialData>
    </ProfilCard>
  );
};

Profil.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
