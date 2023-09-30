'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/atoms/icons'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useRouter } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            router.push('/dashboard')
        }, 1500)
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Label className='mb-2' htmlFor='username'>
                            Username
                        </Label>
                        <Input
                            id='username'
                            placeholder='Masukan Username'
                            type='text'
                            autoCapitalize='none'
                            autoComplete='username'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Label className='mb-2' htmlFor='password'>
                            Password
                        </Label>
                        <Input
                            id='password'
                            type='password'
                            placeholder='Masukan Password'
                            autoCapitalize='none'
                            autoComplete='password'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading} className='mt-2'>
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Sign In
                    </Button>
                </div>
            </form>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                    <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                    <span className='bg-background px-2 text-muted-foreground'>
                        Atau Lanjutkan dengan
                    </span>
                </div>
            </div>
            <Button variant='outline' type='button' disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                ) : (
                    <Icons.google className='mr-2 h-4 w-4' />
                )}{' '}
                Google
            </Button>
        </div>
    )
}
