import React from 'react'
import { Sidebar, ContentArea } from "../components"
import useApi from "../Api/useApi"

const Home = () => {
    const { data, error, loading } = useApi("user/get-user-details/hunain");

    console.log(data, error, loading)
    return (
        <div className='container'>
            <Sidebar />
            <ContentArea />
        </div>
    )
}

export default Home
