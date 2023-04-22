import styles from './index.module.css'

const Input = (props) => {
  return (
    <label className={`${styles.label} grid-row justify-content-start`}>
      <img
        src={props.img}
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

export default Input