import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../components/Card"
import { Link } from "react-router-dom";
const Corosel = ({data}: {data: any}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    return (
        <div>

            <Slider {...settings}>
                {data.map((d: any) => (
                    <div className="" key={d.id}>
                        <Link to={`/detailpage/${d.media_type}/${d.id}`}><Card data={d} /></Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Corosel
