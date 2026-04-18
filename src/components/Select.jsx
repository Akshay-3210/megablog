import React, { useId } from 'react'

function Select({
    options,
    label,
    className="",
    ...props
},ref) {
    const id=useId();
  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={id} className=''>
          {label}
        </label>
      )}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-blue-950 outline-none
                 focus:bg-blue-50 duration-200 border border-blue-200 focus:border-blue-400 w-full  
                 ${className}`}
      >
        {options?.map((option) => {
            const value = typeof option === 'string' ? option : option.value
            const labelText = typeof option === 'string' ? option : (option.label ?? option.value)
            return (
              <option key={value} value={value}>
                {labelText}
              </option>
            )
        })}

      </select>
    </div>
  )
}

export default React.forwardRef(Select)
