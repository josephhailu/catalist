import { useAuth0 } from '@auth0/auth0-react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react';
import {
  XMarkIcon,
  FolderIcon,
  HomeIcon,
  Cog6ToothIcon,
  Bars3Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import LoginButton from '../auth/LoginButton';
import SignupButton from '../auth/SignupButton';
import { classNames } from '../lib/button/utilities';

const navigation = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: HomeIcon },
  {
    name: 'Collections',
    href: ROUTES.COLLECTIONS,
    icon: FolderIcon,
  },
];
const teams = [
  {
    id: 1,
    name: 'Movies & T.V. Shows',
    href: `${ROUTES.COLLECTIONS}/${1}`,
    initial: 'M',
  },
  {
    id: 2,
    name: 'Books',
    href: `${ROUTES.COLLECTIONS}/${1}`,
    initial: 'B',
  },
  {
    id: 3,
    name: 'Music',
    href: `${ROUTES.COLLECTIONS}/${1}`,
    initial: 'M',
  },
];

const NavMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth0();
  const handleLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
      <div>
        <div>
          {isAuthenticated && (
            <>
              <Dialog
                open={sidebarOpen}
                onClose={setSidebarOpen}
                className="relative z-50 lg:hidden"
              >
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 flex">
                  <DialogPanel
                    transition
                    className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                  >
                    <TransitionChild>
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                        <button
                          type="button"
                          onClick={() => setSidebarOpen(false)}
                          className="-m-2.5 p-2.5"
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            aria-hidden="true"
                            className="size-6 text-white"
                          />
                        </button>
                      </div>
                    </TransitionChild>

                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                      <div className="flex h-16 shrink-0 items-center">
                        <img
                          alt="Your Company"
                          src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                          className="h-8 w-auto"
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <NavLink
                                    to={item.href}
                                    end
                                    onClick={() => setSidebarOpen(false)}
                                    className={({ isActive }) =>
                                      classNames(
                                        isActive
                                          ? 'bg-indigo-700 text-white'
                                          : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                      )
                                    }
                                  >
                                    {({ isActive }) => (
                                      <>
                                        <item.icon
                                          aria-hidden="true"
                                          className={classNames(
                                            isActive
                                              ? 'text-white'
                                              : 'text-indigo-200 group-hover:text-white',
                                            'size-6 shrink-0'
                                          )}
                                        />
                                        {item.name}
                                      </>
                                    )}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <div className="text-xs/6 font-semibold text-indigo-200">
                              Your Collections
                            </div>
                            <ul className="-mx-2 mt-2 space-y-1">
                              {teams.map((team) => (
                                <li key={team.name}>
                                  <NavLink
                                    to={team.href}
                                    end
                                    onClick={() => setSidebarOpen(false)}
                                    className={({ isActive }) =>
                                      classNames(
                                        isActive
                                          ? 'bg-indigo-700 text-white'
                                          : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                      )
                                    }
                                  >
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                      {team.initial}
                                    </span>
                                    <span className="truncate">
                                      {team.name}
                                    </span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="mt-auto">
                            <Link
                              to={ROUTES.SETTINGS}
                              onClick={() => setSidebarOpen(false)}
                              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                            >
                              <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                              />
                              Settings
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </DialogPanel>
                </div>
              </Dialog>
              <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                      className="h-8 w-auto"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                end
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                  )
                                }
                              >
                                {({ isActive }) => (
                                  <>
                                    <item.icon
                                      aria-hidden="true"
                                      className={classNames(
                                        isActive
                                          ? 'text-white'
                                          : 'text-indigo-200 group-hover:text-white',
                                        'size-6 shrink-0'
                                      )}
                                    />
                                    {item.name}
                                  </>
                                )}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs/6 font-semibold text-indigo-200">
                          Your teams
                        </div>
                        <ul className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <NavLink
                                to={team.href}
                                end
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                  )
                                }
                              >
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Link
                          to={ROUTES.SETTINGS}
                          onClick={() => setSidebarOpen(false)}
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                        >
                          <Cog6ToothIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                          />
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        {isAuthenticated && (
          <>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-900/10 lg:hidden"
            />
          </>
        )}
        <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            {/* Separator */}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              {isAuthenticated ? (
                <>
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm/6 font-semibold text-gray-900"
                      >
                        {user?.name}
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-400"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to={ROUTES.PROFILE}
                        onClick={() => setSidebarOpen(false)}
                        className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      >
                        Your profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </>
              ) : (
                <div className="flex gap-4">
                  <SignupButton />
                  <LoginButton />
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
