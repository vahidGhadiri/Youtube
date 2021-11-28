import {SidebarInterface} from "./interfaces.config";
import {
    MdExplore,
    MdHistory,
    MdLibraryAddCheck,
    MdOutlineFavoriteBorder,
    MdOutlineLocalFireDepartment,
    MdOutlineWatchLater,
    MdPlayCircleOutline
} from "react-icons/md";

export const SIDEBAR_PRIMARY: SidebarInterface[] = [
    {name: "Explore", icon: <MdExplore/>, route: ""},
    {name: "Trending", icon: <MdOutlineLocalFireDepartment/>, route: ""},
    {name: "Subscription", icon: <MdPlayCircleOutline/>, route: ""}
]


export const SIDEBAR_SECONDARY: SidebarInterface[] = [
    {name: "Library", icon: <MdLibraryAddCheck/>, route: ""},
    {name: "History", icon: <MdHistory/>, route: ""},
    {name: "Watch later", icon: <MdOutlineWatchLater/>, route: ""},
    {name: "Likes videos", icon: <MdOutlineFavoriteBorder/>, route: ""},
]