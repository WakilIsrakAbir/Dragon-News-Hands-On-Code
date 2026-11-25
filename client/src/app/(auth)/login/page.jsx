"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  const email = watch("email");
  // console.log(email);

  const password = watch("password");
  // console.log(password);

  const handleLoginFunc = async (data) => {
    // console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required, The email address of the user.
      password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
      callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
    });
    console.log(res, error)
  };

  // old methode e eivabe form er value neya hoto ekhon react hook form install kore neya jai.
  // const handleLoginFunc = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     // console.log(email,password);
  // }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className=" p-10 rounded-2xl bg-white">
        <h1 className="font-bold text-xl text-center mb-4">
          Login your account
        </h1>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              className="input w-sm"
              placeholder="Type your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email ? (
              <p className="text-red-500">{errors.email.message}</p>
            ) : (
              ""
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-sm"
              placeholder="Type your password"
              {...register("password", {
                required: "Password Field is Required",
              })}
            />
            {errors.password ? (
              <p className="text-red-500">{errors.password.message}</p>
            ) : (
              ""
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-sm mt-4">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have account?{" "}
          <Link href={"/register"} className="pl-1 text-red-600">
            Register Now
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
