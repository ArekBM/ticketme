const ProgressDisplay = ({ progress } : any) => {
    return (
        <div className='flex justify-between gap-4'>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${progress}%`}} />
            </div>
            {/* <p>{progress}%</p> */}
        </div>
    )
} 

export default ProgressDisplay