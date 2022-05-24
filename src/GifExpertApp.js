import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [Categories, setCategories] = useState(['One Piece']);




    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {Categories.map(Categories =>
                    <GifGrid
                        key={Categories}
                        category={Categories}
                    />
                )}
            </ol>
        </>
    )
}
