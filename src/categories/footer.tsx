import React from 'react'
import { FacebookIcon, TwitterIcon, InstagramIcon, PhoneIcon, Mail } from 'lucide-react'

export default function footer() {
  return (
    <div className='footer flex w-full p-2 items-center justify-center '>
      <span><FacebookIcon size={20}/></span>
      <span><TwitterIcon size={20}/></span>
      <span><InstagramIcon size={20}/></span>
      <span><PhoneIcon size={20}/></span>
      <span><Mail size={20}/></span>
    </div>
  )
}
