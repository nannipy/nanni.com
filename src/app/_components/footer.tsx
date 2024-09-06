import React from 'react'
import Image from 'next/image'



const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <div className="flex flex-col items-center justify-center rounded-full bg-white p-2">
        <a href="/">
        <Image src="/logo_nb.png"  alt="logo" width={30} height={30} />
        </a>
      </div>
    </div>
  )
}

export default Footer

