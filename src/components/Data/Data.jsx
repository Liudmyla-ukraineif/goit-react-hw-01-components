import PropTypes from 'prop-types';
import css from '../Data/Data.module.css';

export default function Data({ title, objStats }) {
  return(
  <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
        
        {Object.keys(objStats).map((key) => (
          <li className={css.item}>
            <span className={css.label}>{key}</span>
            <span className={css.percentage}>{`${objStats[key]}`}%</span>
          </li>
        ))}

{/* 
    <li className={css.item}>
      <span className={css.label}>.docx</span>
      <span className={css.percentage}>{label === '.docx' && `${percentage} %`}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp3</span>
      <span className={css.percentage}>{label === '.mp3' && `${percentage} %`}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.pdf</span>
      <span className={css.percentage}>{label === '.pdf' && `${percentage} %`}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp4</span>
      <span className={css.percentage}>{label === '.mp4' && `${percentage} %`}</span>
    </li> */}
  </ul>
</section>
  )
}

Data.protoType = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  performance:PropTypes.number.isRequired,
}

