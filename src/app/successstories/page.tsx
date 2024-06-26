import Footer from '@/components/globals/Footer'
import { FloatingNavbar } from '@/components/globals/navbar'
import { SuccessGrid } from '@/components/globals/successstories'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LetsTalk } from '@/components/ui/letstalk'
import { Textarea } from '@/components/ui/textarea'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Globe, LocateIcon, Map, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { cn } from '@/lib/utils'
import { VisitWebsite } from '@/components/ui/visitwebsite'


export default function SuccessStories() {
    return (
        <main className=" bg-[#05071E] mx-auto  h-full z-10 overflow-hidden">
            <FloatingNavbar />
            <Image src='/mask.png' height={1000} className=" absolute overflow-hidden -mt-56  z-10  w-full 0" width={1000} alt="Background mask for zapllo automation" />
            <div className='flex justify-center ] w-full'>
                <div className=' w-full  lg:justify-center md:mx-4 mt-32'>
                    <h1 className='md:text-center text-start   bg-clip-text text-transparent font-semibold text-3xl lg:text-3xl   md:mx-0 bg-gradient-to-r mx-6  from-[#815BF5] via-[#FC8929]  to-[#FC8929]'> Success Stories</h1>
                    <h1 className='md:text-center text-start mx-6 md:mx-0 mt-4 md:text-4xl text-4xl font-medium'>Real Success Stories with<span className='bg-gradient-to-r mx-4  from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-transparent'>
                        Zapllo </span> </h1>
                    <div className=' flex justify-center'>
                        <p className='mt-4 text-[#676B93] max-w-5xl text-sm mx-6 md:mx-0  text-start md:text-center'>From New York Times bestsellers to visionary entrepreneurs, our clients have unlocked exponential growth with our Bespoke Workflows, Automations, and Notion Systems. No matter your field, our expert engineers craft tools that not only save you thousands of dollars but also reclaim the precious time lost to manual tasks or unnecessary staffing. Elevate your business efficiency today!</p>
                    </div>
                </div>
            </div>
            <div className='p-8 flex justify-center'>
                <div className='grid grid-cols-1 gap-4  text-center md:grid-cols-2 max-w-5xl mx-4'>
                    <div className='bg-[#0A0D28]  p-4 md:p-8 rounded-2xl'>
                        <img src='bald.png' className='w-full' />
                        <div className='flex justify-center mt-4'>
                            <img src='star.png' className='h-5' />
                        </div>
                        <h1 className='font-bold mt-4'>Bill Bachand 1</h1>
                        <h2>Founder & CEO RENU Therapy</h2>
                        <p className='text-start text-xs  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. I am amazed how he delivered and also increased our conversion rates building amazing Shopify Automation. Grateful to Zapllo !</p>
                        <div className='mt-4 md:flex md:justify-between'>
                            <div className=''>
                                <h1 className='text-sm text-start '>Weekly Open Rates</h1>
                                <h1 className=' bg-gradient-to-r mt-2 mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-transparent font-semibold text-5xl text-start'>91%</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-sm text-start'>Subscription Rate</h1>
                                <h1 className=' bg-gradient-to-r mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-start text-transparent mt-2 font-semibold text-5xl'>62%</h1>
                            </div>
                        </div>
                        <VisitWebsite />
                    </div>
                    <div> {/***2nd div */}
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-2xl'>
                                <img src='emptyrec.png' className='opacity-0' />
                                {/* <img src='bald.png' className='w-full opacity-0' /> */}

                            </div>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-xl'>
                                <h1 className='text-md text-start'>Learn About</h1>
                                <h1 className='text-2xl text-start  font-semibold'>The Spark of Dan Sullivan</h1>
                                <p className='text-start text-sm  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. </p>
                                <div className='mt-6 flex gap-2 md:gap-6 '>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-2 md:px-4 py-1'>Entrepreneurial Wisdom</h1>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-4 py-1'>10x Growth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-8 flex justify-center'>
                <div className='grid grid-cols-1 gap-4 max-w-5xl text-center md:grid-cols-2 mx-4'>
                    <div> {/***2nd div */}
                        <div className='grid grid-cols-1 gap-4 max-w-5xl'>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-2xl'>
                                <img src='emptyrec.png' className='opacity-0' />
                            </div>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-xl'>
                                <h1 className='text-md text-start'>Learn About</h1>
                                <h1 className='text-2xl text-start  font-semibold'>The Spark of Dan Sullivan</h1>
                                <p className='text-start text-sm  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. </p>
                                <div className='mt-6 flex gap-2 md:gap-6 '>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-2 md:px-4 py-1'>Entrepreneurial Wisdom</h1>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-4 py-1'>10x Growth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4  text-center md:grid-cols-1   '>
                        <div className='bg-[#0A0D28]  p-4 md:p-8 rounded-2xl'>
                            <img src='bald.png' className='w-full' />
                            <div className='flex justify-center mt-4'>
                                <img src='star.png' className='h-5' />
                            </div>
                            <h1 className='font-bold mt-4'>Bill Bachand 2</h1>
                            <h2>Founder & CEO RENU Therapy</h2>
                            <p className='text-start text-xs  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. I am amazed how he delivered and also increased our conversion rates building amazing Shopify Automation. Grateful to Zapllo !</p>
                            <div className='mt-4 md:flex md:justify-between'>
                                <div className=''>
                                    <h1 className='text-sm text-start '>Weekly Open Rates</h1>
                                    <h1 className=' bg-gradient-to-r mt-2 mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-transparent font-semibold text-5xl text-start'>91%</h1>
                                </div>
                                <div className=''>
                                    <h1 className='text-sm text-start'>Subscription Rate</h1>
                                    <h1 className=' bg-gradient-to-r mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-start text-transparent mt-2 font-semibold text-5xl'>62%</h1>
                                </div>
                            </div>
                            <VisitWebsite />
                        </div>

                    </div>


                </div>
            </div>
            <div className='p-8 flex justify-center'>
                <div className='grid grid-cols-1 gap-4 text-center md:grid-cols-2 max-w-5xl mx-4'>
                    <div className='bg-[#0A0D28] p-4 md:p-8 rounded-2xl'>
                        <img src='bald.png' />
                        <div className='flex justify-center mt-4'>
                            <img src='star.png' className='' />
                        </div>
                        <h1 className='font-bold mt-4'>Bill Bachand 3</h1>
                        <h2>Founder & CEO RENU Therapy</h2>
                        <p className='text-start text-sm  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. I am amazed how he delivered and also increased our conversion rates building amazing Shopify Automation. Grateful to Zapllo !</p>
                        <div className='mt-4 md:flex md:justify-between'>
                            <div className=''>
                                <h1 className='text-sm text-start '>Weekly Open Rates</h1>
                                <h1 className=' bg-gradient-to-r mt-2 mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-transparent font-semibold text-5xl text-start'>91%</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-sm text-start'>Subscription Rate</h1>
                                <h1 className=' bg-gradient-to-r mx-6 md:mx-0 from-[#815BF5] via-[#FC8929]  to-[#FC8929] bg-clip-text text-start text-transparent mt-2 font-semibold text-5xl'>62%</h1>
                            </div>
                        </div>
                        <Button className='rounded-2xl w-full mt-6 flex gap-2'><Globe /> Visit Website</Button>
                    </div>
                    <div> {/***2nd div */}
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-2xl'>
                                <img src='emptyrec.png' className='opacity-0' />
                            </div>
                            <div className='bg-[#0A0D28] p-4 md:p-8 rounded-xl'>
                                <h1 className='text-md text-start'>Learn About</h1>
                                <h1 className='text-2xl text-start  font-semibold'>The Spark of Dan Sullivan</h1>
                                <p className='text-start text-sm  mt-4 text-[#676B93]'>I found Shubhodeep when we were struggling to streamline and simplify our order processing on Shopify. </p>
                                <div className='mt-6 flex gap-2 md:gap-6 '>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-2 md:px-4 py-1'>Entrepreneurial Wisdom</h1>
                                    <h1 className=' bg-gradient-to-r  from-[#815BF5] via-[#FC8929]  to-[#FC8929] -text text-white rounded-2xl font-semibold text-sm px-4 py-1'>10x Growth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SuccessGrid /> */}
            <div className='mt-12'>
                <Footer />
            </div>
        </main>
    )
}
