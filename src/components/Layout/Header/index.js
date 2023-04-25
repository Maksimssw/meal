import Button from "../../UI/Button";
import Input from "../../UI/Input";

import search from '../../../static/icons/search.svg'
import styles from './index.module.css'
import {useRef, useState} from "react";

const Header = (props) => {
  const [isValidForm, setIsValidForm] = useState(true)
  const valueInput = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    setIsValidForm(true)

    const nameMeal = valueInput.current.value
    if (nameMeal.trim().length === 0) {
      setIsValidForm(false)
    }

    props.onAddSearch(nameMeal)
  }

  return (
    <header className={`${styles.header} container`}>
      <h2 className={styles['header__name']}>Hello, Patricia</h2>

      <form
        action=""
        className={`
         ${styles['header__form']}
         ${isValidForm ? '' : styles['header__form_error']}
        `}
        onSubmit={submitHandler}
      >
        <Button
          class={styles['header__search']}
          type='submit'
        >
          <img
            src={search}
            alt=""
          />
        </Button>

        <Input
          ref={valueInput}
          class={styles['header__label']}
          classInput={styles['header__input']}
          input={{
            placeholder: 'What do you want eat today...',
            type: 'text'
          }}
        />
      </form>
    </header>
  )
}

export default Header