import React from 'react';

const MyProducts = () => {
  
  const products = [
    {
      id: 1,
      imageSrc: 'ruta/a/la/imagen1.jpg',
      title: 'Producto 1',
      price: 19.99,
    },
    {
      id: 2,
      imageSrc: 'ruta/a/la/imagen2.jpg',
      title: 'Producto 2',
      price: 29.99,
    },
    {
      id: 3,
      imageSrc: 'ruta/a/la/imagen3.jpg',
      title: 'Producto 3',
      price: 39.99,
    },
    {
      id: 4,
      imageSrc: 'ruta/a/la/imagen3.jpg',
      title: 'Producto 4',
      price: 39.99,
    },
    {
      id: 5,
      imageSrc: 'ruta/a/la/imagen3.jpg',
      title: 'Producto 5',
      price: 39.99,
    },
    {
      id: 6,
      imageSrc: 'ruta/a/la/imagen3.jpg',
      title: 'Producto 6',
      price: 39.99,
    },
  ];

  return (
    <section id="productos" className="main-section">
      <h2>Productos</h2>
      <div className='product-list'>
        {products.map((product) => (
          <p key={product.id} className="product-card">
            <img src={product.imageSrc} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </p>
        ))}
      </div>
    </section>
  );
};

export default MyProducts;

