import styles from './index.module.css'

const Card = (props) => {
  return (
    <li
      className={`
        ${styles.card}
        ${props.class}
      `}
    >
      {props.children}
    </li>
  )
}

export default Card