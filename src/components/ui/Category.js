import React from 'react';

export default function Category( {category: {id, title, image }}) {
  
    return (
        <a href='/' className='flex flex-col group items-center gap-y-2 text-center p-4 transition hover:rounded-lg hover:bg-purple-100'>
            <img src={image} alt={title} className='w-12 h-12 rounded border border-gray-200' />
            <span className='text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color tracking-tight'>{title}</span>
        </a>
    )
}
