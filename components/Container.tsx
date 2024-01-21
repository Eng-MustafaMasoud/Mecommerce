import React from 'react'

interface propsType{
    children:React.ReactNode,
    className?:string
}

const Container = ({children,className}:propsType) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 lg:px-0 ${className}`}>
        {children}
    </div>
  )
}

export default Container