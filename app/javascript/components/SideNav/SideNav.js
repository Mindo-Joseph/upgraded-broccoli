import React from 'react';
import PropTypes from "prop-types";
import {ChartBarSquareIcon} from "@heroicons/react/24/outline";
import {CalendarIcon} from "@heroicons/react/20/solid";
import {ChatBubbleLeftIcon} from "@heroicons/react/20/solid";
import {BookOpenIcon} from "@heroicons/react/20/solid";
import {AcademicCapIcon} from "@heroicons/react/20/solid";
import {BellAlertIcon} from "@heroicons/react/20/solid";
import {StarIcon} from "@heroicons/react/20/solid";
import {ArrowRightOnRectangleIcon} from "@heroicons/react/20/solid";
import {PlusIcon} from "@heroicons/react/24/outline";


const UploadButton = ({className, icon, label}) => {
    const defaultClass = `flex items-center justify-start w-full py-2 pl-4 rounded-lg hover:bg-gray-200}`;
    const appliedClass = className || defaultClass;
    return (
        <button className={appliedClass}>
            <span className="inline-block mr-4">{icon}</span>
            <span className="inline-block">{label}</span>
        </button>
    );
};
const NavButton = ({icon, label}) => {
    return (
        <button className="flex">
            <span className="icon bg-red-800">
                {icon}
            </span>
            <span className="label">
                {label}
            </span>
        </button>
    )
};

const SideNavTop = () => {
    return (
        <div className="flex flex-col bg-gray-700">
            <div className="flex flex-row" id={"logo-section"}>
                <h3 className="text-2xl font-bold">Logo</h3>
            </div>
            <div className="flex" id={"user-profile"}>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        {/* <img src="{}" /> */}
                    </div>
                </div>
                <div className="user-info flex flex-col">
                    <h3 className="text-xl font-bold">User Name</h3>
                    <p className="text-sm">User Role</p>
                </div>
            </div>
        </div>
    )
}

const SideNav = () => {
    return(
        <aside className="flex flex-col w-auto">
            <SideNavTop />
            {/* TODO: Ensure the icons are showing */}
            <div className="flex flex-col" id={"nav-buttons"}>
                <NavButton icon={<ChartBarSquareIcon/>} label={"Dashboard"} />
                <NavButton icon={<CalendarIcon/>} label={"Schedule"} />
                <NavButton icon={<ChatBubbleLeftIcon/>} label={"Chat"} />
                <NavButton icon={<BookOpenIcon/>} label={"My course"} />
                <NavButton icon={<AcademicCapIcon/>} label={"My Status"} />
                <NavButton icon={<BellAlertIcon/>} label={"Reviews"} />
                <NavButton icon={<StarIcon/>} label={"My account"} />
                <UploadButton label={"upload"} className={"bg-green-500"} icon={<PlusIcon/>} />
                <NavButton icon={<ArrowRightOnRectangleIcon/>} label={"Logout"} />
            </div>
        </aside>
    )
};


UploadButton.defaultProps = {
    additionalClass: ""
}
UploadButton.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    additionalClass: PropTypes.string
}
NavButton.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
};
export default SideNav;
