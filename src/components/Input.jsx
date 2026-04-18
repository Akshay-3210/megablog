import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref){
    const id=useId();
    return (
        <div className="w-full">
            {label && <label 
            className='block mb-1' 
            htmlFor={props.id}
            >{label}
            </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-blue-950 outline-none
                 focus:bg-blue-50 duration-200 border border-blue-200 focus:border-blue-400 w-full 
                 ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input
