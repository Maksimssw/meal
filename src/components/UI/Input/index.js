import styles from './index.module.css'

const Input = (props) => {
  return (
    <label className={styles.label}>
      <img
        src={props.src}
        alt=""
      />

      <input
        type={props.type}
        placeholder={props.placeholder}
        className={styles['label__input']}
      />
    </label>
  )
}

export default