import { React, Fragment } from 'react'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Services', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    return (
            <Disclosure as="nav" className="bg-gray-800 py-8">
        {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-end h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>

                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    

                {/* <Link href='#'><a className='text-white text-3xl font-bold md:text-4xl lg:text-5xl my-6 lg:py-4 '>Sunny Side</a></Link> */}

                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
    )
    
    }


export default Navbar