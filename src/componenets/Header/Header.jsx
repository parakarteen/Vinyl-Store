import React from 'react'
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.left}>
            <img src="./images/logo.png" alt ='logo' />
            <div>
                <h3>music store</h3>
                <p>The most delicious music</p>
            </div>
            </div>
            <ul className={style.right}>
                <li>
                    <img width={18} height={18} src="./images/cart.png" alt ='' />
                    <span>1205 сом.</span>
                </li>
                <li><img width={21} height={19} src="./images/like.png" alt ='' /></li>
                <li><img width={20} height={20} src="./images/person.png" alt ='' /></li>
            </ul>
        </div>
    )
}

export default Header

