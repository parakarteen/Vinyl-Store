import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import Card from '../components/Card/Card'
import { MainContext } from '../context'
import style from './Order.module.scss'

function Orders() {

    const [order, setOrder] = useState([])

    React.useEffect(() => {
        (async () => {
        const { data } = await axios.get('https://614d9f3ae3cf1f001712d227.mockapi.io/orders')
        // console.log(data.map(item => item.items).flat())
        setOrder(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        })()
    }, [])

    const myStyle = {
        fontSize: '1.4vw',
        fontWeight: '600', 
        opacity: 0.5
    }
  
    return (
        <div className="content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            justifyContent: "space-between",
          }}
        >
          <h1>Мои закладки</h1>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          order.map((item, index) => (
            <div className={style.card}>
            <h5
              style={myStyle}
            >{index+1}</h5>
              <>
              <div className={style.favorite}>
          </div>
          <img width={133} height={112} src={item.imgURL} alt="Music" />
          <h5>
            {item.title}
          </h5>
          <div className={style.cardBottom}>
          <div className={style.cardPrice}>
          </div>
        </div>
              </>
      </div>
          ))
        }
        </div>
      </div>
    )
}

export default Orders