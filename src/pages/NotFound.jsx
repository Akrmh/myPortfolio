import { useNavigate } from "react-router-dom"
import Button from "../components/Button"


const NotFound = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-extrabold">404</h1>
        <h2 className="text-5xl font-extrabold text-red-700">Page Not Found</h2>
        <Button className="bg-green-900 text-[18px] text-white
         py-4 px-12 rounded-full hover:bg-green-800 
         focus:ring-[2px] focus:ring-green-700 focus:ring-offset-2 outline-none"
         onClick={handleClick}
         buttonText="Go Home"/>
        
    </div>
  )
}

export default NotFound