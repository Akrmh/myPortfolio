

const Footer = () => {
   const currentYear = new Date().getFullYear()
  return (
    <footer className="flex flex-col gap-2 items-center bg-gray-200 p-10 rounded-tl-[30%] rounded-tr-[30%]">
        <p className="font-bold text-xl">Akrmh Mohamedzain</p>
        <p>&copy; All rights reserved, {currentYear} </p>
    </footer>
  )
}

export default Footer