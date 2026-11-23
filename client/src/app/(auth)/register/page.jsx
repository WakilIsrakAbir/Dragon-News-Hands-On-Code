"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
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

  const handleRegisterFunc = (data) => {
    // console.log(data);
    const {email, name, photo, password} = data;
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
          Register your account
        </h1>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-sm"
              placeholder="Type your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name ? (
              <p className="text-red-500">{errors.name.message}</p>
            ) : (
              ""
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input w-sm"
              placeholder="Type your photo URL"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.photo ? (
              <p className="text-red-500">{errors.photo.message}</p>
            ) : (
              ""
            )}
          </fieldset>
          
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
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link href={"/login"} className="pl-1 text-green-600">
            Login Now
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
