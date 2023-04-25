import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import './categorymenu.styles.scss'

const CategoryMenu = ({categories}) => {
    
  return (
    <div className='categories-menu-container'>
    {categories.map((category) => {
        return  <CategoryItem key={category.id} category={category}/>
        
      })}

  </div>
  )
}

export default CategoryMenu