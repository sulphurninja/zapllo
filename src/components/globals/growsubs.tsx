import React from 'react'

export default function GrowSubs() {
    return (
        <div className='text-center mx-4 md:mx-0 max-w-[1050px]'>
            <div>

            </div>
            <h1 className='text-center text-3xl font-bold bg-gradient-to-r from-[#815BF5] to-[#FC8929] bg-clip-text text-transparent '>Grow</h1>
            <h1 className='text-4xl mt-4 font-semibold text-white'>Grow Your Active Subscribers</h1>
            <p className='text-sm mt-4'>Each newsletter comes with a custom subscriber enrollment page that is tailored to capture leads and incentivize sharing, turning every new subscriber into a potential brand ambassador for exponential growth.</p>
            <div className='flex justify-center'>
                <img src='zapllo.png' className='h-48' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=''>
                    <img src='rect.png' />
                    <h1 className='mt-4 text-3xl font-semibold '>Convert</h1>
                    <h2 className='mt-2'>Industries</h2>
                    <p className='text-xs mt-2'>Our custom opt-in pages captivate and convert audiences into engaged subscribers. Designed for optimal conversion, these visually engaging pages capture attention and inspire action, all while maintaining your brand unique identity for a cohesive user experience.</p>
                </div>
                <div className=''>
                    <img src='rect.png' />
                    <h1 className='mt-4 text-3xl font-semibold'>Capture</h1>
                    <h2 className='mt-2'>Subscriber Preferences</h2>
                    <p className='text-xs mt-2'>Effortlessly capture audience preferences during opt-in. Our AI intelligently curates content, enhancing subscriber relationships. Tailored content not only satisfies but also fortifies loyalty, ensuring heightened brand retention and allegiance.</p>
                </div>
                <div className=''>
                    <img src='rect.png' />
                    <h1 className='mt-4 text-3xl font-semibold '>Scale</h1>
                    <h2 className='mt-2'>Active Subscribers</h2>
                    <p className='text-xs mt-2'>Transform new subscribers into brand ambassadors with our referral incentives. Reward sharing, fueling organic growth and rapid newsletter expansion. Harness the conversion power of trusted, friend-referred subscribers.</p>
                </div>
            </div>
        </div>
    )
}
