"use client";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui/button";
import useAuthStore from "@/stores/authStore";

interface INavbarProps { }

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const { email, onLogOut } = useAuthStore();

  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    // - jika localStorage auth tersedia token
    // - callApi keepLogin dengan membawa token
    // - hasil response callApi, disimpan ulang ke localStorage dan global state
  }, []);

  return (
    <nav className="bg-red-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold">
            <span>DashAPP</span>
          </Link>
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Link href="/blogs">
              <span>Blogs</span>
            </Link>
            <Link href="/about">
              <span>About</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </div>
          {email ? (
            <div className="flex items-center gap-4">
              <p>{email}</p>
              <Button
                type="button"
                onClick={() => {
                  localStorage.removeItem("auth");
                  onLogOut();
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button>Signin</Button>
              </Link>
              <Link href="/signup">
                <Button>Signup</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
