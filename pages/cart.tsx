import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BagContext from '../contexts/bag';
import Link from 'next/link';

const Cart: NextPage = () => {

  const { bag, findInBag, saveInBag, updateInBag, removeInBag } = React.useContext(BagContext)

  
  return (
    <div className="px-4 px-md-0">
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className='py-4 my-2'>Carrinho</h1>

        {bag.map(item => (
          <div key={item?._id} className="card rounded-0 border-start-0 border-end-0" >
            <div className="card-body">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <h6 className="card-title">{item?.name}</h6>
                <p className="card-text fw-semibold">R$ 24, 99</p>
              </div>

              <Link passHref shallow href={`/product/${item._id}`} >
                <a className="btn card-link text-primary fw-semibold">Ver Item</a>
              </Link>
              <button onClick={() => removeInBag(item?._id)} className="btn card-link text-muted fw-semibold">Remover</button>
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}

export default Cart
