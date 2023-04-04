import {HiHome, HiHashtag} from "react-icons/hi";
import {IoNotificationsOutline,IoBookmarksOutline} from "react-icons/io5";
import{MdMailOutline} from "react-icons/md";
import {RiFileList2Line} from "react-icons/ri";
import {CgProfile, CgMoreO} from "react-icons/cg"

export const dataNav =
[ 
    {id: 1, title: "Home", src: <HiHome className="icon"/>,  },
    {id: 2, title: "Explore", src: <HiHashtag className="icon"/>  },
    {id: 3, title: "Notification", src: <IoNotificationsOutline className="icon"/>  },
    {id: 4, title: "Messages", src: <MdMailOutline className="icon"/>  },
    {id: 5, title: "Bookmarks", src: <IoBookmarksOutline className="icon"/>  },
    {id: 8, title: "List", src: <RiFileList2Line className="icon"/>  },
    {id: 6, title: "Profile", src: <CgProfile className="icon"/>  },
    {id: 7, title: "More", src: <CgMoreO className="icon"/>  },
]