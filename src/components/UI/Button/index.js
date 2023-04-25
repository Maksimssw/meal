import styles from './index.module.css'

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`
        ${styles.button}
        ${props.class}
      `}
    >
      {props.children}
    </button>
  )
}

export default Button