import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex container items-center justify-between px-10 py-4 lg:px-20"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink className="font-semibold text-primary text-2xl" to="/">
            Mytutor.online
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/search-tutor"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Search Tutor
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/student"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Student
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#4f46e5" : "#000",
              backgroundColor: isActive ? "" : null,
            })}
            to="/tutor"
            className="py-1 px-2 block text-base font-normal hover:!text-primary">
            Tutor
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="rounded-lg py-2 px-5 block text-base hover:opacity-80 font-normal bg-primary text-white">
            Login
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Search Tutor
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Student
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#4f46e5" : "#000",
                    backgroundColor: isActive ? "" : null,
                  })}
                  to="/"
                  className="py-1 px-2 block text-base font-normal hover:!text-primary">
                  Tutor
                </NavLink>
              </div>
              <div className="py-6">
                <button className="rounded-lg py-2 px-5 block text-base hover:opacity-80 font-normal bg-primary text-white">
                  Login
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
