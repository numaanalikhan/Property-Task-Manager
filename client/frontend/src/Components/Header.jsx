import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='font-bold text-lg flex justify-between items-center bg-blue-500 text-white p-6 rounded-md shadow-md mb-6'>
            <p className='flex-shrink-0'> Property  Task Manager</p>
            <div className='flex gap-10'>
            <NavLink 
                    to="/home" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-300" : "hover:text-yellow-200"
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/property" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-300" : "hover:text-yellow-200"
                    }
                >
                    Property
                </NavLink>
                <NavLink 
                    to="/tasks" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-300" : "hover:text-yellow-200"
                    }
                >
                    Task
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
