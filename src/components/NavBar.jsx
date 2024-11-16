import logo from '../assets/logo.png';

function NavBar() {
    return(
        <div className="flex items-center justify-center bg-gray-200">
        <div className="flex items-center">
          <div className="px-24">
            <img className="" src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <ul className="flex items-center">
              <div className="px-24">
                <li>Categories</li>
              </div>
              <div className="px-24">
                <li>Contact Us</li>
              </div>
              <div className="px-24">
                <li>About</li>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
      
    )
}

export default NavBar