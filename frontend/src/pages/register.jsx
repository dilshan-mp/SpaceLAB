import { Image, cn } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  MailIcon,
} from "../assets/icons/incons";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm();

  const handleRegister = async (formData) => {
    console.log(formData);
    setIsLoading(true);

    try {
      await axios
        .post(`${BASE_URL}/api/user/register`, formData)
        .then(() => {
          reset();
        })
        .catch((error) => {
          console.log(error);
        });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className=" text-white flex flex-1 flex-col items-center pt-16 sm:justify-center sm:pt-0 z-10 ">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div className="flex items-center">
            <Image
              width={50}
              height={50}
              src="./logo.png"
              className={isLoading && "animate-spin"}
            />
            <p className="font-bold text-inherit ml-2 text-4xl">
              Space
              <span className="font-[700] bg-clip-text  text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                LAB
              </span>
            </p>
          </div>
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div
          className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          bis_skin_checked="1"
        ></div>
        <div className=" backdrop-blur-sm mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20  rounded-lg border-white/20 border-l-white/20 border-r-white/20 lg:rounded-xl ">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">
              Register
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">
              Welcome, enter your details to register.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit(handleRegister)}>
              <div>
                <div>
                  <div className="flex group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      autoComplete="off"
                      variant="underlined"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      {...register("name", {
                        required: "Full Name is required!",
                      })}
                    />
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  </div>
                  {errors.name && (
                    <p
                      role="alert"
                      className="text-xs font-semibold mt-2 ml-2 text-red-500"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div className="flex group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      variant="underlined"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      {...register("email", {
                        required: "Email is required!",
                        pattern: {
                          value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email.",
                        },
                      })}
                    />
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  </div>
                  {errors.email && (
                    <p
                      role="alert"
                      className="text-xs font-semibold mt-2 ml-2 text-red-500"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div
                    className={cn(
                      "group relative rounded-lg border  px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:border-sky-200 focus-within:ring-sky-300/30"
                    )}
                  >
                    <div className="flex items-center">
                      <input
                        type={isVisible ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        {...register("password", {
                          required: "Password is required!",
                        })}
                      />
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p
                      role="alert"
                      className="text-xs font-semibold mt-2 ml-2 text-red-500"
                    >
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="outline-none focus:outline focus:outline-sky-300"
                  />
                  <span className="text-xs">Remember me</span>
                </label>
                <a
                  className="text-sm font-medium text-foreground underline"
                  href="/forgot-password"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <Link
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                  to="/login"
                >
                  Login
                </Link>
                <button
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
