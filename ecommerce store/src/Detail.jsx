import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";


const Detail = ({ products, setCart, cart ,cartProducts}) => {
    const { id } = useParams(); // Extracting the 'id' parameter from the URL
    const newProduct = products.find(product => product.id === parseInt(id));

   
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false)
            }, 5000);
        }
    }, [open])
    if (!newProduct) {
        return <div>Product not found</div>;
    }
console.log('find', cartProducts.find(el=> el.id == 1))
    return (
        <div className="md:flex-1 flex flex-col md:flex-row  max-sm:p-7 h-full p-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="h-[460px] rounded-lg  mb-4 ">
                    <img className="w-full h-full object-cover rounded-lg hover:scale-95" src={newProduct.image} alt="Product Image" />
                </div>
            </div>
            <div className="w-full md:w-1/2 px-4 flex flex-col justify-evenly">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">{newProduct.nom}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-md mb-10">{newProduct.description}</p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                            <span className="text-gray-600 dark:text-gray-300">MAD <span className='text-xl font-bold text-green-500'>{newProduct.price}</span>  /gram</span>

                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Origin: </span>
                            <span className="text-gray-600 dark:text-gray-300">{newProduct.origine}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex -mx-2">
                        <div className="w-1/2 px-2">
                            {cartProducts.find(el => el.id == newProduct.id) ? <button disabled={true} className="w-full bg-green-900 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-green-700">Already in the cart</button> :
                            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={() => { setCart([...cart, newProduct.id]); setOpen(true) }}>Add to Cart</button>
                        }</div>
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <Alert open={open} timer={2} className='bg-[#6b257d] dark:bg-[#edc6f7] dark:text-black fixed bottom-0 w-1/4 pe-10  items-center flex justify-between'>
                Product added successfully to the cart
            </Alert>
        </div>
    );
};

export default Detail;
