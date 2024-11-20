import Questions from "./Questions"
import Theory from "./Theory"



function MainContent({ concept }) {
    return (
        <div className="h-full p-4 ">
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            
        </div>
    )

}
export default MainContent

{/* <div className="bg-gray-200 ml-20 mt-20 mr-20 h-full">
                <div>
                    <h1 className="font-sans text-pink-700 text-4xl p-4 pl-6">{concept}</h1>
                    <Theory />
                </div>
                
            </div> */}