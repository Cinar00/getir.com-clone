import React from 'react';
import { useState, useEffect } from 'react';
import categoryData from '../api/categories.json';
import Category from './ui/Category';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        //istek
        // setTimeout(() => setCategories(categoryData), 1000)
        setCategories(categoryData)
    }, []);
    

    return (
        <div className='bg-white py-4'>
            <div className='container mx-auto'>
                <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
                <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
                     {/* { categories.length && 'Yükleniyor..'} */}
                    { categories && categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </div>
        </div>
    )
}

export default Categories
