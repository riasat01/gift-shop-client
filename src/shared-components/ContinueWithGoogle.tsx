import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";
import { AuthContextType } from "../provider/AuthProvider";
import { useNavigate } from "react-router";


const ContinueWithGoogle = () => {
    const { createUserWithGoogle } = useAuth() as AuthContextType;
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(() => navigate(`/`));
    }
    return (
        <div>
            <div className="divider my-6">OR</div>
            <button className="btn btn-outline btn-primary mx-auto w-full">
                <FcGoogle onClick={handleGoogleLogin} className=" text-3xl" />
                <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default ContinueWithGoogle;