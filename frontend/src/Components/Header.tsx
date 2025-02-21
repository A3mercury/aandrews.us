import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [mainMenuOpen, setMainMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-8" hidden={mainMenuOpen}>
                <a href="#" className="-m-1.5 p-1.5 text-black text-2xl font-semibold">
                    aandrews.us
                </a>
                <div className="flex">
                    <button
                        type="button"
                        onClick={() => setMainMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justiry-center rounded-md p-2.5 text-black"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-10" />
                    </button>
                </div>
            </nav>
            <Dialog open={mainMenuOpen} onClose={setMainMenuOpen} className="mx-auto max-w-4xl items-center justify-between p-6 lg:px-8">
                <DialogPanel className="z-10 w-full overflow-all bg-white">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 text-black text-3xl font-bold">
                            aandrews.us
                        </a>
                        <div className="flex flex-1 justify-end">
                            <button
                                type="button"
                                onClick={() => setMainMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-10" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Blogs page
                        </a>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            About me
                        </a>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Contact
                        </a>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
