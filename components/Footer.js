import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='md:flex justify-center items-center md:p-10 mt-72'>
            <div className='bg-black text-white px-9 md:px-24 py-16 container space-y-10 md:rounded-xl'>
                <div className='flex justify-center items-center mb-16'>
                    <Image priority width={220} height={220} src="/logo.png" alt="logo" />
                </div>
                <div id="contacts" className='flex flex-wrap gap-9 justify-between'>
                    <div>
                        <div className='text-sm text-slate-300 mb-1 flex items-center gap-1'><Image alt='Phone png' src="/footer/phone.png" width={12} height={12} /><span>Contact nums</span></div>
                        <div>+91 0000000000</div>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='text-sm text-slate-300 mb-1 flex items-center gap-1'><Image alt='Mail png' src="/footer/mail.png" width={12} height={12} /><span>Gmail</span></div>
                        <div className='break-words'>example@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-sm text-slate-300 mb-1 flex items-center gap-1'><Image alt='Addrress png' src="/footer/address.png" width={12} height={12} /><span>Address</span></div>
                        <div>Mumbai, India</div>
                    </div>
                    <div>
                        <div className='text-sm text-slate-300 mb-1 flex items-center gap-1'><Image alt='paper png' src="/footer/paper.png" width={12} height={12} /><span>Leave a request</span></div>
                        <div>Leave a request</div>
                    </div>
                </div>
                <div className='text-center text-sm text-slate-300'>We work throughout the world</div>
            </div>
        </footer>
    )
}

export default Footer
