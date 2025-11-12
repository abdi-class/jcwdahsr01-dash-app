"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ISignInPageProps {}

const SignInPage: React.FunctionComponent<ISignInPageProps> = (props) => {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  // Function to submit
  const onBtSignin = async () => {
    try {
      if (emailRef.current?.value && passwordRef.current?.value) {
        // - pemanggilan API untuk mencari data berdasarkan email dan password
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/accounts`, {
          params: {
            where: `email='${emailRef.current.value}' and password='${passwordRef.current.value}'`,
          },
        });
        console.log("RESPONSE FROM API:", res.data);

        if (res.data.length === 0) {
          // - jika tidak ditemukan, maka berikan alert
          alert("Akun tidak ditemukan");
        } else {
          // - jika data ditemukan, menyimpan data tersebut ke global state
          localStorage.setItem("auth", JSON.stringify(res.data[0]));

          router.replace("/");
        }
      } else {
        alert("Fill in all form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-96 bg-white p-6 shadow rounded-2xl m-auto">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form className="space-y-4">
        <Input type="email" placeholder="Input Email" ref={emailRef} />
        <Input type="password" placeholder="Input Password" ref={passwordRef} />
        <Button type="button" className="w-full" onClick={onBtSignin}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
