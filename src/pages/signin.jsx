import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from || "/";

  const { SignIn, GoogleSignIn } = useAuth();

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
        toast.success("Successful log in");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    SignIn(email.trim(), password)
      .then((res) => {
        toast.success("Successful log in");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center md:h-[90vh] lg:min-h-[660px] xl:min-h-[762px] max-w-[85%] min-w-fit mx-auto mb-10 mt-10">
      <Card className="container rounded-lg md:h-[90%] w-[90%] xl:w-full min-h-fit">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center">
          <form
            className="w-full md:w-1/2 flex flex-col items-start lg:pl-32 md:pl-16 gap-4"
            onSubmit={handleSubmit}
          >
            <p className="text-3xl lg:text-5xl font-extrabold mb-4">Sign in</p>

            <TextInput
              id="email1"
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              icon={MdEmail}
              className="w-full max-w-xs lg:max-w-sm   py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
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

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              size="lg"
              type="submit"
              className="w-32 self-center md:self-start"
            >
              Log in
            </Button>
            <div className="border-b-2 w-full max-w-xs lg:max-w-sm "></div>
            <p className="text-lg">Or login with</p>
            <FcGoogle
              className="cursor-pointer"
              onClick={handleGoogleLogin}
              size={32}
            />

            <Link
              to={"/registration"}
              state={{from: from}}
              className="md:hidden self-center text-blue-500 underline"
            >
              Create an account
            </Link>
          </form>
          <div className="w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0 mt-10 md:mt-0">
            <img src="/Signin.svg" alt="signin" className="lg:w-[90%]" />
            <Link
              to={"/registration"}
              className="hidden md:block mt-5 text-blue-500 underline"
            >
              Create an account
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signin;
