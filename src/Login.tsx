import { useState } from "react";
import "./Login.css";
import { Eye, EyeOff } from "lucide-react";
import brand_logo from "./assets/brand_logo.png";

const users = [
    { email: "mahesh@sentiacare.com", password: "mahesh@123" },
    { email: "raghavendra@bluecrimson.com", password: "raghu@123" },
    { email: "bindu@sentiacare.com", password: "bindu@123" },
];

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email: string) => {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) {
            alert("Invalid email or password");
            return;
        }
        alert("Login Successful");
    };

    return (
        <div className="login-page">
            {/* App Bar */}
            {/* 
            <div className="app-bar">
                <img 
                    src="https://api.iconify.design/mdi:react.svg" 
                    alt="logo" 
                    className="app-icon" 
                    style={{ marginLeft: "16px", filter: "invert(1)" }}
                />
                <h2 className="app-title">Viveka</h2>
            </div> */}


            <div className="app-bar">
                <img 
                    src={brand_logo}
                    alt="brand logo" 
                    className="brand-logo" 
                    style={{ marginLeft: "16px", width: "150px", height: "35px" }}
                />
            </div>

            {/* Subscription Warning */}
            <div className="subscription-warning">
                Your subscription has ended. Please contact support team to continue using the app.
            </div>

            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Login to your Account</h2>
                    <p className="login-subtitle" style={{ marginBottom: "32px" }}>Please enter your details to login</p>

                    <form onSubmit={handleLogin}>
                        <label className="input-label">Email or Mobile Number <span className="required">*</span></label>
                        <div className="input-container" style={{ marginBottom: "16px" }}>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email or mobile number"
                                required
                            />
                        </div>

                        <label className="input-label">Password <span className="required">*</span></label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <span
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        <div className="remember-me" style={{ marginBottom: "16px" }}>
                            <input type="checkbox" id="remember" className="checkbox" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit" className="login-btn">Login →</button>

                        {/* Light color divider */}
                        <div className="divider"></div>

                        <p className="register-text">Don't have an account?</p>
                        <button className="create-account-btn">Create Account</button>
                    </form>
                </div>
            </div>

            {/* Version Text */}
            <p className="version-text">0.3.0-rc5</p>
        </div>
    );
};

export default Login;
