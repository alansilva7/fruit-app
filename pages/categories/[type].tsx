import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { MdAdd, MdRemove } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'
import BagContext from '../../contexts/bag';

const Categories: NextPage = () => {

  const router = useRouter()

  const { findInBag, saveInBag, updateInBag, removeInBag } = React.useContext(BagContext)

  return (
    <div className="px-4 px-md-0">
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className='py-4 my-2'>categories {router.query?.type}</h1>

        <div className="row">
          {[
            { _id: 'oi' },
            { _id: 'oi2' },
            { _id: 'oi3' },
            { _id: 'oi4' },
            { _id: 'oi5' },
            { _id: 'oi6' },
            { _id: 'oi7' },
            { _id: 'oi8' },
          ].map(item => (
            <div key={item?._id} className="col-12 col-md-4 col-lg-3 mb-5">
              <div className="card">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  
                  <div className="d-flex flex-row align-items-center justify-content-between">

                    <button onClick={() => {}} className="btn btn-transparent p-1 px-2 mx-2">
                      <IoMdEye />
                    </button>

                    <div className="d-flex flex-row align-items-center">
                      
                      {
                        !!findInBag(item?._id) &&
                        <button className="btn btn-primary p-1 px-2" onClick={() => {
                          if (findInBag(item?._id).quantity <= 1) {
                            removeInBag(item?._id)
                          } else {
                            updateInBag(item?._id, { ...item, quantity: findInBag(item?._id).quantity-1 })
                          }
                        }}>
                          <MdRemove />
                        </button>
                      }
                      {
                        !!findInBag(item?._id) && 
                        <h6 className='p-1 px-2 mb-0 mx-1'>{findInBag(item?._id).quantity}</h6>
                      }

                      <button className="btn btn-primary p-1 px-2" onClick={() => {
                        if (!findInBag(item?._id)) {
                          saveInBag({ ...item, quantity: 1 })
                        } else {
                          console.log('cagaio');
                          
                          updateInBag(item?._id, { ...item, quantity: findInBag(item?._id).quantity+1 })
                        }
                      }} >
                        <MdAdd />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




    </div>
  )
}

export default Categories
