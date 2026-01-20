import Link from "next/link";
import { SearchBar } from "./searchbar";
import { auth } from "@/lib/auth";
import { signOut } from "next-auth/react";
import { SignOut } from "./auth-components";

export const Navbar = async () => {
  const session = await auth();
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm px-10">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <p className="text-xl font-bold">Logo Here</p>
        </Link>
        <p className="text-base font-light text-gray-500 cursor-pointer">
          Kategori
        </p>
      </div>
      <div className="w-1/2">
        <SearchBar />
      </div>
      {session ? (
        <div className="flex gap-8">
          <div className="dropdown dropdown-end">
            <Link href="/cart">
              <div tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={session.user?.image || ""}
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="font-bold">{session.user?.name}</p>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <SignOut />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-8 items-center">
          <Link href="/register">
            <button className="border cursor-pointer text-gray-700 font-medium px-5 py-2 border-gray-700 rounded-md">
              Register
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-gray-700 cursor-pointer font-bold text-white px-5 py-2 rounded-md">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
