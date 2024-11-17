import Questions from "./Questions"
import Theory from "./Theory"


function MainContent({ concept }) {
    return (
        <div>
            <div className="bg-gray-200 ml-72 mt-20 mr-72 h-full">
                <div>
                    <h1 className="font-sans text-pink-700 text-4xl p-4 pl-6">{concept}</h1>
                    <Theory />
                    
                </div>
            </div>
            <div className="bg-gray-200 ml-72 mt-10 mr-72 h-full">
                <Questions />
            </div>
        </div>
    )

}
export default MainContent