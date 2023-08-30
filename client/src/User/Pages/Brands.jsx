import React, { useEffect, useState } from 'react'
import UserCards from '../Components/userCards'
import axios from 'axios'

export default function Brands() {


    const [brand, setBrand] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then(json => setBrand(json.data.Brand))
            .catch(err => alert(err.message))

    }, [])


    return (
        <div className="" style={{ backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")', backgroundSize: 'cover', height: '92.7vh' }}>
            <div className="text-center py-4">
                <h2>Brands</h2>
                {/* <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small> */}
            </div>
            <center>
                <div className="row p-4 m-0">
                    {
                        brand.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} url={`/brands/${val.BrandName}`} />)
                    }

                </div>
            </center>

        </div>
    )
}