const Header = ({setDark , dark , cartopen , setOpen , cartProducts}) => {
  return (
    <div className='flex justify-between max-sm:p-7 px-20 p-5 items-center dark:bg-neutral-900 border-b border-[#6b257d]'>
        <a className="logo flex sm:items-center gap-6 max-sm:flex-col" href="/" >
            <img src="src\assets\logo.png" className='w-14' alt="saffron logo"/>
            <p className="text-3xl dark:text-white">Saffron taliouine</p>
        </a>
        <div className='flex gap-10'>
             <i className="fa-regular fa-2x fa-user text-[#6b257d] dark:text-[#edc6f7]"></i>
             <i onClick={() => setOpen(!cartopen)} className="fa-solid fa-2x fa-cart-shopping text-[#6b257d] dark:text-[#edc6f7] relative"><span className="bg-red-100 text-red-800 text-xs font-medium me-2 top-0 absolute px-0.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{cartProducts.length}</span>
</i>
            <i onClick={() => setDark(!dark)}  className={`fa-solid fa-2x fa-${dark ? "sun" : 'moon'} text-[#6b257d] dark:text-[#edc6f7] `}></i>
        
        </div>

    </div>
  )
}

export default Header