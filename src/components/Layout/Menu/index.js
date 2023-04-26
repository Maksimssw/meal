import {useContext} from "react";
import FavoriteContext from "../../../store/Favorite/favorite-context";

import logo from '../../../static/image/main/logo.webp'
import dashboard from '../../../static/icons/dashboard.svg'
import favorite from '../../../static/icons/favorite.svg'

import styles from './index.module.css'

const Menu = () => {
  const contextFavorite = useContext(FavoriteContext)

  const falseIsValidHandler = (event) => {
    event.preventDefault()

    contextFavorite.closeItem()
  }

  const actionIsValidHandler = (event) => {
   event.preventDefault()

    contextFavorite.openItem()
  }

  return (
    <aside className={styles.menu}>
      <a href="#" className={styles['menu__logo']}>
        <img
          src={logo}
          alt="GoMeal"
        />
      </a>

      <ul className={styles['menu__list']}>
        <li
          className={`
            ${styles['menu__item']}
            ${contextFavorite.isValid ?  '' : styles['menu__item_active']}
          `}
        >
          <img
            src={dashboard}
            alt=""
          />

          <a
            href='#'
            className={styles['menu__link']}
            onClick={falseIsValidHandler}
          >
            Dashboard
          </a>
        </li>

        <li
          className={`
            ${styles['menu__item']}
            ${contextFavorite.isValid ? styles['menu__item_active'] : ''}
          `}
        >
          <img
            src={favorite}
            alt=""
          />

          <a
            href='#'
            className={styles['menu__link']}
            onClick={actionIsValidHandler}
          >
            Favorite
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Menu