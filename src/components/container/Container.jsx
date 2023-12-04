import css from './container.module.scss';

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
