import { Button, Card, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from || "/";

  const { Registration, GoogleSignIn } = useAuth();

  const handlePasswordVisibilityChange = () => {
    setIsVisible((visible) => !visible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((res) => {
        toast.success("Successful Registration");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (/[A-Z]/.test(password)) {
      toast.error("Password must not contain uppercase letters");
      return;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
      toast.error("Password must not contain special characters");
      return;
    }

    Registration(email.trim(), password)
      .then((res) => {
        toast.success("Successful log in");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center md:h-[90vh] xl:min-h-[762px] max-w-[85%] min-w-fit mx-auto mb-10 mt-10">
      <Card className="container rounded-lg md:h-[90%] mx-4 min-h-fit">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center">
          <form
            className="w-full md:w-1/2 flex flex-col items-start lg:pl-32 md:pl-16 gap-4"
            onSubmit={handleSubmit}
          >
            <p className="text-3xl lg:text-5xl font-extrabold mb-4">
              Registration
            </p>

            <TextInput
              id="email1"
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              icon={MdEmail}
              className="w-full max-w-sm  py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />

            <div className="w-full max-w-xs lg:max-w-sm py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 relative">
              <TextInput
                id="password1"
                placeholder="Password"
                required
                type={isVisible ? "text" : "password"}
                icon={RiLockPasswordFill}
                value={password}
                onChange={handlePasswordChange}
                className="w-full py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={handlePasswordVisibilityChange}
              >
                {isVisible ? <BiShow /> : <BiHide />}
              </div>
            </div>

            <Button
              size="lg"
              type="submit"
              className="w-32 self-center md:self-start"
            >
              Register
            </Button>

            <p className="text-lg">Or login with</p>
            <FcGoogle
              className="cursor-pointer"
              onClick={handleGoogleLogin}
              size={32}
            />

            <Link
              to={"/signin"}
              className="md:hidden self-center text-blue-500 underline"
            >
              Already logged in?
            </Link>
          </form>
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center mb-10 md:mb-0 mt-10 md:mt-0">
            <img src="/Signup.svg" alt="signin" className="lg:w-[90%]" />
            <Link
              to={"/signin"}
              className="hidden md:block mt-5 text-blue-500 underline"
            >
              Already logged in?
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Registration;
