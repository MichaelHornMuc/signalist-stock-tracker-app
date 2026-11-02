'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constants'

const UserDropdown = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const handleSignOut = () => {
    router.push('/sign-in')
  }

  const user = {
    name: 'John',
    email: 'john.doe@example.com',
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'
        render={
          <Button
            variant='ghost'
            className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'>
            <Avatar className='h-8 w-8'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='User avatar'
              />
              <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className='hidden md:flex flex-col items-start'>
              <span className='text-base font-medium text-gray-400'>
                {user.name}
              </span>
            </div>
          </Button>
        }></DropdownMenuTrigger>
      <DropdownMenuContent className='text-gray-400 w-auto min-w-64 max-w-sm'>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className='flex relative items-center gap-3 px-2 py-2'>
              <Avatar className='h-10 w-10'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='User avatar'
                />
                <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col min-w-0'>
                <span className='text-base font-medium text-gray-400 truncate'>
                  {user.name}
                </span>
                <span className='text-sm text-gray-500 truncate'>
                  {user.email}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className='bg-gray-600' />
          <DropdownMenuItem
            onClick={handleSignOut}
            className='text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer'>
            <LogOut className='w-4 h-4 mr-2 sm:block' />
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator className='bg-gray-600 hidden sm:block' />
          <div className='sm:hidden'>
            {NAV_ITEMS.map(({ href, label }) => (
              <DropdownMenuLinkItem
                key={href}
                render={<Link href={href} />}
                className={`hover:text-yellow-500 focus:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''}`}>
                {label}
              </DropdownMenuLinkItem>
            ))}
          </div>
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
