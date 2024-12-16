// Add the required props
export const UserInfo = ({ users }) => {
  return (
    <a className="UserInfo" href={`mailto:${users.email}`}>
      {users.name}
    </a>
  );
};
