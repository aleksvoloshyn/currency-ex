import css from './title.module.scss';

const Title = ({ title }) => {
  return <h1 className={css.title}>{title}</h1>;
};

export default Title;
