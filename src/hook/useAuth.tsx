import { useContext } from "react"
import { Authcontext } from "../provider/AuthProvider"

const useAuth = () => {
    const auth = useContext(Authcontext);
    return auth;
}

export default useAuth;