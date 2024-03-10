import React from 'react';
import CategoryCard from '../../../atoms/categoryCard/CategoryCard';

const Categories = () => {
  const categoriesData = [
    {
      name: 'Té',
      description: 'Descubre nuestra amplia selección de tés.',
      productsLinkText: 'Ver productos de té'
    },
    {
      name: 'Infusión',
      description: 'Encuentra las mejores infusiones para disfrutar en cualquier momento.',
      productsLinkText: 'Ver productos de infusión'
    },
    {
      name: 'Regalos',
      description: 'Regalos perfectos para los amantes del té.',
      productsLinkText: 'Ver productos de regalo'
    },
    {
      name: 'Accesorios',
      description: 'Descubre nuestra gama de accesorios para preparar y disfrutar del té.',
      productsLinkText: 'Ver accesorios'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {categoriesData.map((category, index) => (
        <div key={index} className="w-full">
          <CategoryCard
            name={category.name}
            description={category.description}
            productsLinkText={category.productsLinkText}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
