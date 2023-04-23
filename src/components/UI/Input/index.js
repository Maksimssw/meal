import styles from './index.module.css'

const Input = (props) => {
  return (
    <label className={`
      ${styles.label} 
      ${props.class}
      grid-row 
      justify-content-start
    `}>
      <span>{props.text}</span>

      <input className={styles['label__input']} {...props.input} />
    </label>
  )
}

export default Input