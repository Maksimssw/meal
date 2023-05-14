import styles from './index.module.css'

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import {useRef, useState} from "react";

const validForm = (text) => text.trim().length !== 0
const SubmitButton = (props) => {
  const [form, setForm] = useState(true)

  const name = useRef()
  const city = useRef()
  const address = useRef()

  const closeSubmitHandler = () => {
    props.onSubmitIsValid()
  }

  const submitHandler = (event) => {
    setForm(true)
    event.preventDefault()

    const textName = name.current.value
    const textCity = city.current.value
    const textAddress = address.current.value

    const isValid = validForm(textName) && validForm(textCity) && validForm(textAddress)

    if (!isValid) {
      setForm(false)
      return
    }

    props.onSubmitOrder({
      name: textName,
      city: textCity,
      address: textAddress
    })

    name.current.value = ''
    city.current.value = ''
    address.current.value = ''
  }

  return (
    <form className={styles.submit} onSubmit={submitHandler}>
      {!form && <p>Enter all fields</p>}
      <Input
        ref={name}
        type="text"
        placeholder={'Enter a name'}
        text={'Name'}
        class={styles['submit__input']}
      />
      <Input
        ref={city}
        type="text"
        placeholder={'Write your city'}
        text={'City'}
        class={styles['submit__input']}
      />
      <Input
        ref={address}
        type="address"
        placeholder={'Write your address'}
        text={'Address'}
        class={styles['submit__input']}
      />

      <Button type={'button'} onClick={closeSubmitHandler}>Cancel</Button>
      <Button type={'submit'}>Confirm the order</Button>
    </form>
  )
}

export default SubmitButton