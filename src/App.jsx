import { useEffect, useState } from 'react';
import {FaCartShopping} from 'react-icons/fa6';

const Product = ({
  title,
  description,   
  price, 
  brand,
  images
}
  ) => {
  return (
    <article className='bg-white rounded-lg shadow-md p-6'>
      <img src={images[0]} alt="Imagen del producto" />
      <h1 className='font-bold'>{title}</h1>
      <p>{description}</p>
      <div className='flex justify-between'>
        <span>{brand}</span>
        <span className='font-bold'>${price}</span>
        </div>
    </article>
  );
}

const ProductList = ({products})  => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        products.map((product) => {
          return (
            <Product
             key={product.id}
             title={product.title} 
             description={product.description} 
             price={product.price} 
             brand={product.brand}
             images={product.images} 
            />
          )
        })
      }
    </div>
  );
}


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => {
    console.log(json);
    setProducts(json.products);
  });
  }, []);

  return (
    <>
      <header className='bg-orange-500'>
        <div className='pl-8 pt-8 pb-4 flex gap-4 justify-between'> 
          <div className='flex items-center'>
            <h1 className="text-2xl font-bold text-white mr-4">Wecommerce</h1><FaCartShopping />
          </div>
          <button type="button" className='mr-10'>
            Ver carrito
          </button>
        </div>
      </header>
      <main className="mt-20 p-10">
        <ProductList products={products} />
      </main>
    </>
  )
}

// const BrandList = () => {
//   return (

//   );
// }


export default App
