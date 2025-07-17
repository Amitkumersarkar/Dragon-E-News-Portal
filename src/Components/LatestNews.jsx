import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {

    return (
        <div className="flex gap-3 items-center bg-gray-300">
            <p className="bg-[#D72050] text-white font-semibold p-2">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10 ">
                <Link to='/news'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, sunt.
                </Link>
                <Link to='/news'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, sunt.
                </Link>
                <Link to='/news'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, sunt.
                </Link>
                <Link to='/news'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, sunt.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;