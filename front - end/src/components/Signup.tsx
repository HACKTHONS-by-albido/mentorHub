"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";

export function Signup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setrole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(email);

  const handleRegister = (e: any) => {
    e.preventDefault();

    if (email && password && role && password == confirmPassword) {
      axios
        .post("http://localhost:8080/api/auth/register", {
          email,
          password,
          role,
        })
        .then((res) => {
          const { auth, tokenName, token, push, message } = res.data;
          console.log(res.data);

          if (auth === true) {
            setCookie(tokenName, token);
            window.location.href = push;
          }

          alert(message);
        })
        .catch((err: any) => {
          alert(err.message);
        });
    } else {
      alert("a field is missing");
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        type="button"
        className="text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-1 text-xs text-center
             sm:text-sm sm:px-3 sm:py-2 sm:font-medium"
      >
        Sign Up
      </button>

      {open && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <div className="flex justify-end">
              <button
                className="text-gray-500 dark:text-white"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <img src="/Mentor.png" alt="Logo" className="h-16" />
            </div>

            <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center mb-2">
              Welcome to mentorHub
            </h2>
            <p className="text-neutral-600 text-sm max-w-md text-center dark:text-neutral-300">
              Join mentorHub and start your mentoring journey today!
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

            <form className="my-4" onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  placeholder="Example@gmail.com"
                  type="email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  className="mt-1 px-3 py-2 block w-full rounded-md border-2 border-solid border-black shadow-sm focus:border-#009AF0 focus:ring focus:ring-#009AF0 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="number"
                  placeholder="9000909000"
                  type="number"
                  value={number}
                  onChange={(e: any) => setNumber(e.target.value)}
                  className="mt-1 px-3 py-2 block w-full rounded-md border-2 border-solid border-black shadow-sm focus:border-#009AF0 focus:ring focus:ring-#009AF0 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Register as
                </label>

                <select
                  name=""
                  id="role"
                  onChange={(e: any) => setrole(e.target.value)}
                  className="mt-1 px-3 py-2 block w-full rounded-md border-2 border-solid border-black shadow-sm focus:border-#009AF0 focus:ring focus:ring-#009AF0 focus:ring-opacity-50"
                >
                  <option value="">mentor or mentee </option>
                  <option value="mentor">mentor</option>
                  <option value="mentee">mentee</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="mt-1 px-3 py-2 block w-full rounded-md border-2 border-solid border-black shadow-sm focus:border-#009AF0 focus:ring focus:ring-#009AF0 focus:ring-opacity-50"
                  onChange={(e: any) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  placeholder="••••••••"
                  type="password"
                  value={confirmPassword}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                  className="mt-1 px-3 py-2 block w-full rounded-md border-2 border-solid border-black shadow-sm focus:border-#009AF0 focus:ring focus:ring-#009AF0 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-#00D2EB to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-#009AF0 to-transparent" />
    </>
  );
};
