import logo from '../assets/logo.png';

function NavBar() {
    return(
        <div className="flex items-center justify-center bg-white">
        <div className="flex items-center">
          <div className="px-24">
            <img className="" src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <ul className="flex items-center">
              <div className="px-24">
                <li className='text-blue-600 hover:text-red-600 bg-red-200 p-4 rounded-2xl w-28 text-center'><a href='#'>Concepts</a></li>
              </div>
              <div className="px-24">
                <li className='text-blue-600 hover:text-red-600 bg-red-200 p-4 rounded-2xl w-28 text-center'><a href='#'>Contact Us</a></li>
              </div>
              <div className="px-24">
              <li className='text-blue-600 hover:text-red-600 bg-red-200 p-4 rounded-2xl w-28 text-center'><a href='#'>About</a></li>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
      
    )
}

export default NavBar