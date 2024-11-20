import Theory from "./Theory";
import arr from "../assets/arr.png";


export default function Description() {
    return (
        <div>
            <div className=" bg-pink-200 p-4  w-full h-80 static flex">
                <div className="flex-1">
                    <Theory />
                </div>
                <div className="p-8">
                    <img src={arr} alt="logo" width={500} height={500} absolute />
                </div>

            </div>


        </div>
    )
}

