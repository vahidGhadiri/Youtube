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

import {AiOutlineInfoCircle, AiOutlineSetting} from "react-icons/ai"

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

export const SIDEBAR_SUBSCRIPTION: SidebarInterface[] = [
    {
        name: "JSConf",
        image: "https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s88-c-k-c0x00ffffff-no-rj",
        route: ""
    },
    {
        name: "Kennt C. Dodds",
        image: "https://yt3.ggpht.com/ytc/AKedOLTiR5QXiYQX_IKKYf853C5pEgKFMYh44jpwVpVk_Q=s88-c-k-c0x00ffffff-no-rj",
        route: ""
    },
    {
        name: "Andrei Neagoi",
        image: "https://yt3.ggpht.com/ytc/AKedOLQxAwqb9EEBNw_KIGmGWJOOZ8XR7B-xhBC0ciA=s88-c-k-c0x00ffffff-no-rj",
        route: ""
    },
    {
        name: "ElifMusic",
        image: "https://yt3.ggpht.com/oLG6NXyEXjtEoCqmVmPkqgDNfcNhdFcFy8GaA_c9K-hZorx-7AvWdK0rO8jsLsSQ2EJ9ChHx=s88-c-k-c0x00ffffff-no-rj",
        route: ""
    }
]

export const SIDEBAR_MORE: SidebarInterface[] = [
    {name: "Settings", icon: <AiOutlineSetting/>, route: ""},
    {name: "FeedBack", icon: <AiOutlineInfoCircle/>, route: ""}
]