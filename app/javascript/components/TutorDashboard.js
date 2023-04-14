import React from 'react';
import PropTypes from 'prop-types';



const Card = ({ title, description, image }) => {
    return (
        <div className="flex bg-white shadow-md rounded-md p-4">
            <div className="flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className='flex'>
                {/* TODO: ADD Icon here */}
                <img className="h-20 w-20 rounded-full" src="" alt="icon" />
            </div>
        </div>
    );
}
const TopSection = () => {
    return (
        <div className='top-section grid grid-cols-3 gap-4'>
            <Card title="Tutoring Sessions" description="View your tutoring sessions" image="" />
            <Card title="Tutoring Sessions" description="View your tutoring sessions" image="" />
            <Card title="Tutoring Sessions" description="View your tutoring sessions" image="" />
        </div>
    )
}

const ChartSection = () => {
    return (
        <div className="chart-section">
        </div>
    )
}
const TutorDashboard = () => {
    return (
        <div>
            <TopSection />
            <ChartSection />
        </div>
    )
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default TutorDashboard;
