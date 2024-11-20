import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className='flex justify-evenly bg-pink-300'>
      <img src={logo} alt="Logo" width={80} height={80} />
      <div className='p-4 '>
        <ul className="flex items-center">
          {/* Concept Button */}
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 font-medium rounded-lg text-base p-4 w-28 ml-8 mr-8 text-center inline-flex items-center justify-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              type="button"
            >
              Concept
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Arrays
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              String
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              LinkedList
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Stack And Queue
            </a>
          </li>
        </ul>
      </div> 
      <div className='p-4'>
        <button className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 font-medium rounded-lg text-base 
      p-4 w-28 ml-8 mr-8  text-center inline-flex items-center justify-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" type="button">
          Contact Us
        </button>
      </div>
      <div className='p-4'>
        <button
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 font-medium rounded-lg text-base p-4 w-28 ml-8 mr-8 text-center inline-flex items-center justify-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          type="button"
        >
          About
        </button>
      </div>

    </div>





  )
}

export default NavBar
