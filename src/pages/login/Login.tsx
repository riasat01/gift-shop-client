import { Link, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import { AuthContextType } from "../../provider/AuthProvider";
import ContinueWithGoogle from "../../shared-components/ContinueWithGoogle";

interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const { loginUser } = useAuth() as AuthContextType;
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        loginUser(data.email, data.password)
            .then(() => navigate(`/`));
    };

    return (
        <div className="hero bg-base-200 min-h-fit">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: "Password is required"
                                })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New here? <span className="font-bold"><Link to={`/register`}>Please Register</Link></span></p>
                    <ContinueWithGoogle />
                </div>
            </div>
        </div>
    );
};

export default Login;