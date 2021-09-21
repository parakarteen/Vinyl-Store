import React from 'react'
import style from './Card.module.scss'

const Card = () => {
    return (
        <div className={style.card}>
           <div className={style.item}>
            <div className={style.ab}><img src='/images/heart.svg'/></div>
            <img src='/images/1.png'/>
            <p>Виниловый Альбом Indie Music 1986</p>
            <div>
                <span>Цена:</span>
                <div className={style.price}>
                <p className={style.pr}>12 999 сом.</p>
                <img 
                className={style.imgItem}
                src='/images/plus.svg'
                alt='plus'
                
                />
                </div>
                
            </div>
           </div>

           <div className={style.item}>
            <div className={style.ab}><img src='/images/heart.svg'/></div>
            <img src='/images/2.png'/>
            <p>Виниловый Альбом Indie Music 1986</p>
            <div>
                <span>Цена:</span>
                <div className={style.price}>
                <p className={style.pr}>12 999 сом.</p>
                <img 
                className={style.imgItem}
                src='/images/plus.svg'
                alt='plus'
                
                />
                </div>
                
            </div>
           </div>

           <div className={style.item}>
            <div className={style.ab}><img src='/images/heart.svg'/></div>
            <img src='/images/3.png'/>
            <p>Виниловый Альбом Indie Music 1986</p>
            <div>
                <span>Цена:</span>
                <div className={style.price}>
                <p className={style.pr}>12 999 сом.</p>
                <img 
                className={style.imgItem}
                src='/images/plus.svg'
                alt='plus'
                
                />
                </div>
                
            </div>
           </div>

           <div className={style.item}>
            <div className={style.ab}><img src='/images/heart.svg'/></div>
            <img src='/images/4.png'/>
            <p>Виниловый Альбом Indie Music 1986</p>
            <div>
                <span>Цена:</span>
                <div className={style.price}>
                <p className={style.pr}>12 999 сом.</p>
                <img 
                className={style.imgItem}
                src='/images/plus.svg'
                alt='plus'
                
                />
                </div>
                
            </div>
           </div>
        </div>
    )
}

export default Card