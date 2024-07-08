import React from 'react';
import { Categories } from '@/utils/nav';
import Image from 'next/image';

export default function CategoriesComponent() {
  return (
    <div >
      <section >
        <h3 className="text-center font-semibold my-2">Categories</h3>
        <div className='cover'>
          {Categories.map(cat => (
            <div key={cat.name} className='flex items-center justify-between py-4'>
              <div
                style={{
                  backgroundImage: `url(${cat.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100px',
                  width: '100px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className='relative'
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-md'
                />
                  <span className='z-10 styling p-2 w-full text-center'>{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
