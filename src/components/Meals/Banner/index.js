import styles from './index.module.css'

import girl from '../../../static/image/girl.webp'
const Banner = () => {
  return (
    <section className={`${styles.banner} container`}>
      <div className={styles['banner__wrapper']}>
        <div className={styles['banner__content']}>
          <h1 className={styles['banner__headline']}>
            Get Discount Voucher Up To 20%
          </h1>

          <p className={styles['banner__description']}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <img
          className={styles['banner__image']}
          src={girl}
          alt=""
        />
      </div>
    </section>
  )
}

export default Banner