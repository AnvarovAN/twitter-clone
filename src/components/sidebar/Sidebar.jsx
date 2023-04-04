import {useState} from 'react'
import { dataNav } from '../../utils/data'
import { BsTwitter } from "react-icons/bs"
import { NavLink, useNavigate, Link} from 'react-router-dom'
import {FaUserCircle} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"

import "./sidebar.css"
import { useUserContext } from '../../Context'
const Sidebar = () => {
    const [active, setActive] = useState(false)

    const { logoutUser, user  } = useUserContext();

    const goTo = useNavigate();
  
    const handleLogout = async () => {
        await logoutUser();
        goTo.push('/login');
    };
    return (
        <div className='sidebar w-[200px] ml-20'>
            <div className="sidebar__wrapper flex flex-col gap-[50px] mt-[50px] ">
                <div className="sidebar__logo">
                    <BsTwitter className='w-[40px] h-[40px] text-[#00acee]' />
                </div>
                <div className="sidebar__nav flex flex-col gap-8">
                    {
                        dataNav.map((el) => (
                            el.title === "Profile" ?
                                <NavLink to={'/profile'}>
                                    <div key={el.id} className="sidebar__list flex gap-5 items-center">
                                        <span className='sidebar__icon'>{el.src}</span>
                                        <p className='sidebar__title text'>{el.title}</p>
                                    </div>
                                </NavLink> :
                                <NavLink to={'/info'}>
                                    <div key={el.id} className="sidebar__list flex gap-5 items-center">
                                        <span className='sidebar__icon'>{el.src}</span>
                                        <p className='sidebar__title text'>{el.title}</p>
                                    </div>
                                </NavLink>
                        ))
                    }
                </div>
                <div className="profile flex items-center justify-start gap-4">
                    <div className="profile-img">
                        <FaUserCircle className='w-10 h-10'/>
                    </div>
                    <div className="profile-name flex flex-col">
                        <h2>{user.displayName}</h2>
                        <p>@{user.displayName ? user.displayName.toLowerCase() : user.email}</p>
                    </div>
                    <div className="profile-more">
                    <FiMoreHorizontal className={active ? "active":"not-active"}/>
                    {user ? <button onClick={handleLogout}>Logout</button> : <Link className='rounded border' to="/login">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar