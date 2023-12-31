import React from 'react'

const Options = ({
    options,
    label,
    className,
    ...props
},[ref]) => {
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((ele)=>{
                <options key={ele} value={ele}>
                    {ele}
                </options>
            })}
        </select>
    </div>
  )
}

export default React.forwardRef(Options)
