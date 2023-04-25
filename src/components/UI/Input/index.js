import {forwardRef} from "react";
import styles from './index.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <label className={`
      ${styles.label} 
      ${props.class}
      grid-row 
      justify-content-start
    `}>
      <span>{props.text}</span>

      <input
        ref={ref}
        className={`
          ${styles['label__input']}
          ${props.classInput}
        `}
        {...props.input}
      />
    </label>
  )
})

export default Input