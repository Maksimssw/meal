import styles from './index.module.css'
import Input from "../../UI/Input";

import search from '../../../static/icons/search.svg'

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <h2 className={styles['styles__name']}>Hello, Patricia</h2>

      <Input
        img={search}
        type={'text'}
        placeholder={'What do you want eat today...'}
      />
    </header>
  )
}

export default Header