import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
