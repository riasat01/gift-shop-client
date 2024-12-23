import { Link } from "react-router";
import useAuth from "../hook/useAuth";
import { AuthContextType } from "../provider/AuthProvider";

const Dropdown = () => {
    const {user, logout} = useAuth() as AuthContextType;
    const handleLogout = () => {
        logout();
    }
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                <div className="avatar">
                    <div className="w-12">
                        {
                            user?.photoURL ? <img src={`${user?.photoURL}`} /> : <p>{user?.email}</p>
                        }
                        
                    </div>
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link to={`/dashboard`}>Dashboard</Link></li>
                <li><button onClick={handleLogout} className="btn btn-outline btn-primary btn-sm">Logout</button></li>
            </ul>
        </div>
    );
};

export default Dropdown;