import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  const user = useUser();

  return (
    <div className="navbar bg-slate-200 rounded-b-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] py-2 px-5  bg-base-100 rounded-box opacity-50"
          >
            <Link className="my-4 font-serif  font-bold" href="/">
              Listings
            </Link>
            <Link className="my-4 font-serif  font-bold" href="/inbox">
              Messages
            </Link>
            <Link className="my-4 font-serif  font-bold" href="/sell-an-item">
              Sell
            </Link>
          </ul>
        </div>
        <Link href="/">
          <h1 className="btn btn-ghost normal-case text-2xl font-serif  font-bold">ezFeet</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-5 mx-10">
        <Link className="mx-4 font-serif  font-bold" href="/">
              Listings
            </Link>
            <Link className="mx-4 font-serif  font-bold"  href="/inbox">
              Messages
            </Link>
            <Link className="mx-4 font-serif  font-bold"  href="/sell-an-item">
              Sell
            </Link>
        </ul>
      </div>
      <div className="navbar-end px-10">
        {user.isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <span className="btn w-full p-5">Sign In</span>
          </SignInButton>
        )}
      </div>
    </div>
  );
}
