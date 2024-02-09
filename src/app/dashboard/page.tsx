import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
        <div className='min-h-screen grainy'>
            <div className='max-w-6xl mx-auto p-10'> 
                <div className="h-14"></div>
                {/* Dashboard title */}
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='flex items-center'>
                        <Link href={'/'}>
                            <Button className='size-sm bg-rose-600'>
                                <ArrowLeft className='mr-1 w-4 h-4'/>
                                Back
                            </Button>
                        </Link>
                        <div className='w-4'></div>
                        <h1 className='text-3xl font-bold text-gray-900'>My Notes</h1>
                        <div className='w-4'></div>
                        {/* Decide later to remove or not: */}
                        <UserButton />
                    </div>
                </div>
            <div className='h-8'> </div>
            <Separator />
            <div className='h-8'> </div>
            {/* Notes section */}
            {/* Conditional rendering when: No notes */}
            <div className='text-center'>
                <h2 className='text-xl text-gray-500'>No notes here. Write some!</h2>
            </div>
            
            </div>
        </div>
    </>
  )
}

export default DashboardPage