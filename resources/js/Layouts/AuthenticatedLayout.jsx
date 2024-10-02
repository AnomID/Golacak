import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import {
    UserIcon,
    ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

export default function AuthenticatedLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // Menentukan route dashboard berdasarkan role
    const dashboardRoute =
        user.role === "admin" ? "admin.bulan.index" : "user.bulan.index";

    return (
        <div className="min-h-screen bg-[#FCFAEE]">
            {/* Navbar */}
            <nav className="bg-[#B8001F] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href={route(dashboardRoute)}>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-white" />
                                </Link>
                                <Link href={route(dashboardRoute)}>
                                    <h1 className="text-lg font-bold ml-4 text-white">
                                        GO-Lacak
                                    </h1>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route(dashboardRoute)}
                                    active={route().current(dashboardRoute)}
                                    className="text-white hover:text-gray-200"
                                >
                                    Dinas Tenaga Kerja Kota Semarang
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#507687] hover:text-gray-200 hover:bg-[#384B70] focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content className="bg-gray-100 shadow-lg rounded-lg">
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                                        >
                                            <UserIcon
                                                className="h-5 w-5 inline-block mr-1"
                                                aria-hidden="true"
                                            />
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                                        >
                                            <ArrowLeftEndOnRectangleIcon
                                                className="h-5 w-5 inline-block mr-1"
                                                aria-hidden="true"
                                            />
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Hamburger menu for mobile */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#384B70] focus:outline-none transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive Navigation for Mobile */}
                <div
                    className={`${
                        showingNavigationDropdown ? "block" : "hidden"
                    } sm:hidden`}
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route(dashboardRoute)}
                            active={route().current(dashboardRoute)}
                            className="block px-4 py-2 text-sm text-white hover:bg-[#507687] hover:text-gray-200"
                        >
                            Dinas Tenaga Kerja Kota Semarang
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        {/* Dropdown menu for mobile */}
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                className="block px-4 py-2 text-sm text-white hover:bg-[#507687] hover:text-gray-200"
                            >
                                <UserIcon
                                    className="h-5 w-5 inline-block mr-1"
                                    aria-hidden="true"
                                />
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#507687] hover:text-gray-200"
                            >
                                <ArrowLeftEndOnRectangleIcon
                                    className="h-5 w-5 inline-block mr-1"
                                    aria-hidden="true"
                                />
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
    );
}
