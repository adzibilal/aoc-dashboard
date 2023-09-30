import { Search } from "@/components/atoms/search"
import { MainNav } from "@/components/molecules/main-nav"
import { UserNav } from "@/components/molecules/user-nav"

export default function DashboardLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
           <div className='flex flex-col'>
                <div className='border-b'>
                    <div className='flex h-16 items-center px-4'>
                        <MainNav className='mx-6' />
                        <div className='ml-auto flex items-center space-x-4'>
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}
