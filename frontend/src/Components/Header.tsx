import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-8">
                <a href="#" className="-m-1.5 p-1.5 text-black text-2xl font-semibold">
                    aandrews.us
                </a>
                <div className="flex">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="flex items-center rounded-full text-black">
                                <span className="sr-only">Open options</span>
                                <Bars3Icon aria-hidden="true" className="size-10" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                    href="/blogs"
                                    className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none border-b-1 border-gray-200"
                                    >
                                        Blog Posts
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                    href="/about"
                                    className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none border-b-1 border-gray-200"
                                    >
                                        About
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                    href="/contact"
                                    className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Contact
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}
