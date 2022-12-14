import { Fragment , useContext , useEffect} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../App'

const navigation = [
  { name: 'Employees', href: '/employees' },
  { name: 'Customers', href: '/customers'  },
  { name: 'Dictionary', href: '/dictionary'  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  useEffect(()=>{
    console.log(loggedIn);
  })

  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        // href={item.href}
                        to={item.href} //NavLink mesle tag e 'a' nist ke href bede balke to mide
                        
                        // className={classNames(
                        //   item.current ? 'bg-gray-900 text-white no-underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        //   'px-3 py-2 rounded-md text-sm font-medium no-underline'
                        // )}
                        
                        className ={({isActive})=>{
                            // console.log(item.href + ' ' + isActive);
                            return  ('px-3 py-2 rounded-md text-sm font-medium no-underline'+(isActive?  'text-gray-300 hover:bg-gray-700 hover:text-red' : 'bg-gray-900 text-white'));
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}


                        {
                          loggedIn? 
                                <NavLink
                                // key={item.name} //no key is needed because we are not in a loop(map)

                                  to={'/login' } //vaghti logout mikuni bayad be login page redirect beshi
                                  className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-red"
                                  onClick={()=>{
                                    // console.log("Logging out ....");
                                    setLoggedIn(false);
                                    localStorage.clear(); // chun localstorage ro clear kardim age vaghti login hastim ye page baz kunim baz mige shoma login hasti --> age ino nazshte boodi ba inke logout kardi ba ham dar page e jadid migot login hasti
                                  }}
                                >
                                  Logout
                                </NavLink>
                              :

                          <NavLink
                          // key={item.name} //no key is needed because we are not in a loop(map)

                            to={'/login'} 
                            className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-red"
                          >
                            Login
                          </NavLink>
                        }

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown---> be in felan niaz nadarim vali bezar bashe chun profile drop down ro pak kardim aksesho */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>

                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                    <NavLink
                    key={item.name}
                    // href={item.href}
                    to={item.href} //NavLink mesle tag e 'a' nist ke href bede balke to mide
                    
                    // className={classNames(
                    //   item.current ? 'bg-gray-900 text-white no-underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    //   'px-3 py-2 rounded-md text-sm font-medium no-underline'
                    // )}
                    
                    className ={({isActive})=>{
                        // console.log(item.href + ' ' + isActive);
                        return  ('block px-3 py-2 rounded-md text-base font-medium no-underline'+(isActive ?  'text-gray-300 hover:bg-gray-700' : 'bg-gray-900 text-white'));
                    }}
                    >
                    {item.name}
                    </NavLink>
              ))}

                        {
                          loggedIn? 
                                <NavLink
                                // key={item.name} //no key is needed because we are not in a loop(map)

                                  to={'/login' } //vaghti logout mikuni bayad be login page redirect beshi
                                  className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700"
                                  onClick={()=>{
                                    // console.log("Logging out ....");
                                    setLoggedIn(false);
                                    localStorage.clear(); // chun localstorage ro clear kardim age vaghti login hastim ye page baz kunim baz mige shoma login hasti --> age ino nazshte boodi ba inke logout kardi ba ham dar page e jadid migot login hasti
                                  }}
                                >
                                  Logout
                                </NavLink>
                              :

                          <NavLink
                          // key={item.name} //no key is needed because we are not in a loop(map)

                            to={'/login'} 
                            className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700"
                          >
                            Login
                          </NavLink>
                        }
      </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>  
    <div className='bg-gray-300 '>
        <div className='max-w-7xl min-h-screen px-3 py-2'>{props.children}</div>
    </div>
    <footer>A footer</footer>
    </>
  )
}
