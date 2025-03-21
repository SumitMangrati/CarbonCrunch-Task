const HomeText = ({title , heading , description}) => {
    return (
        <div className='flex flex-col items-center'>
            <h2 
            className='bg-white text-[#28B30F] bg-font-bold text-lg font-medium px-3 py-1 rounded-md mb-3'>
            {title}</h2>
            <h1 className='text-5xl font-bold'>{heading}</h1>
            <div className='text-center text-gray-500 font-medium text-lg'>
                {description}
            </div>
        </div>
    )
}

export default HomeText