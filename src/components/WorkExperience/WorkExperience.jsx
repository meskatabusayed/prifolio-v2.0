import { useRef } from 'react';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './workExperience.css'
import Slider from 'react-slick';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const WorkExperience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const sliderLeft = () => {
        sliderRef.current.slickPrev();
    }


    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className='experience-content'>

                <div className='arrow-right' onClick={slideRight}>

                <span><BsArrowRightSquareFill /></span>
                </div>
                <div className='arrow-left' onClick={sliderLeft}>
                <span><BsArrowLeftSquareFill /></span>

                </div>
                <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard
                    key={item.title} details={item}
                    >

                    </ExperienceCard>
                ))}
                </Slider>
            </div>
            
        </section>
    );
};

export default WorkExperience;