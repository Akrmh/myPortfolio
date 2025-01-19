import PropTypes from "prop-types"

const Card = ({skillName, skillLevel, skillLevelBorderColor,skillLogo, skillLevelTextColor,skillLevelBGColor}) => {
  return (
      
        <div className="border-[1px] shadow-sm border-gray-400 w-[20vw] h-[20vh] px-8 py-5 space-y-4 rounded-2xl">
          <div className="flex justify-between ">
            <p>{skillLogo} </p>
            <h1 className="text-[1.5rem] font-extrabold">{skillName}</h1>
          </div>
          
          
          <div className="w-fit py-1 px-5 text-white rounded-full">
            <small className={`text-sm ${skillLevelTextColor} ${skillLevelBGColor} ${skillLevelBorderColor}`}>{skillLevel}</small>
          </div>
        </div>
      
  )
}

Card.propTypes = {
  skillName: PropTypes.string,
  skillLevel: PropTypes.string,
  skillLevelTextColor: PropTypes.string,
  skillLevelBorderColor: PropTypes.string,
  skillLevelBGColor: PropTypes.string,
  skillLogo: PropTypes.any
}


export default Card