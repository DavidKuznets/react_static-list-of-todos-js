import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = todo => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">HTML</h2>
    {todo.user && <UserInfo todo={todo.user} />}
  </article>
);
