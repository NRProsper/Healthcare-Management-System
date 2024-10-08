import PropTypes from "prop-types";

const HomeCard = ({Icon, title, count}) => {
    return(
        <div className="bg-dc-blue/15 min-h-[88px] py-5 px-6 flex items-center enter gap-6  rounded-lg shadow-xl">
            <span className="text-dc-blue text-6xl">
                <Icon />
            </span>
            <div className="flex flex-col gap-2">
                <h3 className="text-dark font-bold">{title}</h3>
                <span className="text-4xl font-bold text-dc-blue">{count}</span>
            </div>
        </div>
    )
}


HomeCard.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}


export default HomeCard;