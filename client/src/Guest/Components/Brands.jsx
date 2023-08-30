import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { BsFileX } from 'react-icons/bs'






export default function Brands() {
    const [brand, setBrand] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then(json => setBrand(json.data.Brand))
            .catch(err => alert(err.message))

    }, [])



    return (
        <div style={{ height: "100%", width: "100%", backgroundImage: 'url("")', backgroundSize: 'cover' }}>

            <div className="container pt-5">
                <div className="text-center">
                    <h2 className='text-theme text-dark'>Brands</h2>
                    <p className="text-dark border bg-dark.bg-gradient">Discover the Beauty Universe: Your Gateway to the Best Cosmetic Brands. Explore a World of Glamour with Our Curated Selection of Top-Notch Beauty Products by Renowned Brands</p>
                </div>

                <div className="row my-5 py-3">
                    {
                        brand.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                    }

                </div>
            </div>
        </div>




    )
}


