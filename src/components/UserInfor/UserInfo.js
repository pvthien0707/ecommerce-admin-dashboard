import './UserInfo.scss';

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img src={user.avatar} alt="avatar" />
      </div>
      <div className="user-info__name">{user.name}</div>
    </div>
  );
}

export default UserInfo;
