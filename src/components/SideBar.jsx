import expand from '../assets/expand.svg';
import collapse from '../assets/collapse.svg';

function SideBar() {
    return (
        <div className="flex bg-zinc-600">
            <div className="w-64 p-4 bg-blue-50 text-white h-screen fixed top-0 left-0">
                <a href='#'><img src={collapse} alt="expand-botton" width={30} height={30} /></a>
                <h2 className="text-2xl font-semibold mb-6 text-black pt-16">Table of Contents</h2>
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
                </ul>
            </div>

        </div>
    )

}

export default SideBar