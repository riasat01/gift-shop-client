import { Link, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import { AuthContextType } from "../../provider/AuthProvider";
import ContinueWithGoogle from "../../shared-components/ContinueWithGoogle";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

const Register = () => {
    const { createUserWithEmailAndPass } = useAuth() as AuthContextType;
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const password = watch("password");

    const onSubmit = (data: FormData) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        createUserWithEmailAndPass(data.email, data.password)
            .then(() => navigate(`/`));
    };

    return (
        <div className="hero bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
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
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password must include uppercase, lowercase, number, and special character"
                                    }
                                })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === password || "Passwords do not match"
                                })}
                            />
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                {...register("role", { required: "Role is required" })}
                            >
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                                <option value="Admin">Admin</option>
                            </select>
                            {errors.role && <span className="text-red-500">{errors.role.message}</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>Already have an account? <span className="font-bold"><Link to={`/login`}>Please Login</Link></span></p>
                    <ContinueWithGoogle />
                </div>
            </div>
        </div>
    );
};

export default Register;
