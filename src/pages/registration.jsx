import { Button, Card, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
import { BiHide, BiShow } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";


const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [ showError, setError ] = useState({
    error: false,
    message: ''
  })

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
    .then(res => {
        console.log(res.user)
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Registration(email.trim(), password)
    .then(res => {
      console.log(res.user)
    })
    .catch(e => {
      console.log(e.message)
    })
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
              placeholder="name@flowbite.com"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              icon={MdEmail}
              className="w-full max-w-sm  py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />

            <TextInput
              id="password1"
              placeholder="Password"
              required
              type="password"
              icon={RiLockPasswordFill}
              rightIcon={isVisible ? BiShow : BiHide}
              value={password}
              onChange={handlePasswordChange}
              className="w-full max-w-sm py-2 rounded-md  border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />

            <Button
              size="lg"
              type="submit"
              className="w-32 self-center md:self-start"
            >
              Submit
            </Button>

            <GoogleButton
              onClick={handleGoogleLogin}
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
