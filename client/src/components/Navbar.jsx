import React from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { adminMenu, userMenu } from '../Data/Data';
import { message, Badge } from 'antd';

const Navbar = () => {
  const navigate = useNavigate();
  let sty = "px-4 cursor-pointer ease-in duration-200 h-full flex items-center border-y-4 border-[#28328C] hover:border-orange-400";
  const {user} = useSelector(state => state.user);
  const location = useLocation();

  // logout function
  const handleLogout = ()=>{
    localStorage.clear();
    message.success("Logout Sucessfully");
    navigate('/login');
  }
  const menuBar = user?.isAdmin ? adminMenu : userMenu;
  return (
    <div className=' w-full bg-[#28328C] h-16 flex items-center justify-between'>
        <Link to="\" className=' cursor-pointer bg-[#28328C] h-full flex justify-start relative w-[200px]'>
          <img src="..\media\logo.png" alt="Logo" className=' h-full'/>
          <p className=' fondamento-regular text-white text-3xl font-bold absolute bottom-2 right-5'>.Care</p>
        </Link>

        <div className="h-full">
          <div className=' flex w-full h-full justify-between text-white font-mono text-lg'>
              {menuBar.map((menu,i) => {
                const isActive = location.pathname === menu.path;
                return (
                    <Link to={menu.path} className={`${sty} ${isActive && "border-orange-400"}`} key={i}>{menu.name}</Link>
                )
              })}
          </div>
        </div>
        { user ? <div className='flex gap-3 mr-3'>
                    <Badge count={5}>
                        <Avatar shape="square" size="large" />
                    </Badge>
                    <div className='cursor-pointer flex items-center bg-yellow-400 rounded-lg p-1 hover:bg-yellow-500 duration-200 ease-in py-2 px-3 gap-4 font-bold'>
                      <img src="././media/noti_icon.png" alt="Notification" className='h-[20px] w-[20px]'/>
                    </div>
                    <Link to="/login" onClick={handleLogout} className='cursor-pointer flex items-center bg-orange-400 rounded-lg p-1 hover:bg-red-500 duration-200 ease-in py-2 px-3 gap-4 font-bold'>
                        <img src="../../media/logout_.png" className='h-[20px] w-[20px]' />
                        <p>Logout</p>
                    </Link>
                    <Link to="/profile" className='cursor-pointer flex items-center bg-orange-400 rounded-lg p-1 hover:bg-orange-100 duration-200 ease-in py-2 px-3 gap-4 font-bold'>
                        <img src="../../media/user_profile.png" alt="Name" className='h-[20px] w-[20px]' />
                        <p>{user.name}</p>
                    </Link>
                  </div> : 
          <Link to="/login/patient" className=' cursor-pointer flex items-center bg-orange-400 rounded-lg p-1 mr-3 hover:bg-orange-100 duration-200 ease-in'>
              <img src="..\media\Profile_logo.png" alt="Logo" className=' h-6'/>
              <p>Login/Register</p>
          </Link>
        }
    </div>
  )
}

export default Navbar

