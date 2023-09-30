import { ToggleTheme } from '@/components/toggle-theme'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/user-auth-form'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className='container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
                <div className='absolute right-4 top-4 md:right-8 md:top-8'>
                    <ToggleTheme />
                </div>
                <div className='relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex bg-auth-page bg-cover'>
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        <Image
                            src='/images/logo-white.png'
                            height={100}
                            width={100}
                            alt=''
                        />
                    </div>
                    <div className='relative z-20 mt-auto'>
                        <blockquote className='space-y-2'>
                            <p className='text-lg'>
                                Di A Lot Of Coffee, kami percaya bahwa hidup
                                itu seperti secangkir kopi: penuh rasa, aroma,
                                dan peluang. Nikmati banyak momen indah bersama
                                kami, gelas demi gelas.
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className='lg:p-8 max-sm:w-full'>
                    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                        <div className='flex flex-col space-y-2 text-center'>
                            <h1 className='text-2xl font-semibold tracking-tight'>
                                Selamat Datang
                            </h1>
                            <p className='text-sm text-muted-foreground'>
                                Masukan akun anda untuk memasuki aplikasi
                            </p>
                        </div>
                        <UserAuthForm />
                    </div>
                </div>
            </div>
        </>
    )
}
