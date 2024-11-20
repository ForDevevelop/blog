import expand from '../assets/expand.svg';
import collapse from '../assets/collapse.svg';

function SideBar() {
    return (
        
        <div className=" w-72 bg-pink-200 p-4">
        <a href='#'>
          <img src={collapse} alt="expand-button" width={30} height={30} />
        </a>
        <h2 className="text-2xl font-semibold mb-6 text-black pt-4">Table of Contents</h2>
        <ul className="space-y-4">
          <li>
            <a href="#section1" className="text-black hover:text-gray-400 text-xl">Arrays</a>
          </li>
          <li>
            <a href="#section2" className="text-black hover:text-gray-400 text-xl">String</a>
          </li>
          <li>
            <a href="#section3" className="text-black hover:text-gray-400 text-xl">LinkedList</a>
          </li>
          <li>
            <a href="#section4" className="text-black hover:text-gray-400 text-xl">Stack and Queue</a>
          </li>
          <li>
            <a href="#section5" className="text-black hover:text-gray-400 text-xl">Graphs and Tree</a>
          </li>
        </ul>
      </div>
    )

}

export default SideBar