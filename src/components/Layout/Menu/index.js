import logo from '../../../static/image/main/logo.webp'
import dashboard from '../../../static/icons/dashboard.svg'
import favorite from '../../../static/icons/favorite.svg'

import styles from './index.module.css'

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <a href="#" className={styles['menu__logo']}>
        <img
          src={logo}
          alt="GoMeal"
        />
      </a>

      <ul className={styles['menu__list']}>
        <li className={styles['menu__item']}>
          <img
            src={dashboard}
            alt=""
          />

          <a href='#' className={styles['menu__link']}>Dashboard</a>
        </li>

        <li className={styles['menu__item']}>
          <img
            src={favorite}
            alt=""
          />

          <a href='#' className={styles['menu__link']}>Favorite</a>
        </li>
      </ul>
    </aside>
  )
}

export default Menu