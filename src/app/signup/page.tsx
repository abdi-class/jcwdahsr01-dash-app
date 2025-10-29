"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ISignUpPageProps {}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  // Function to submit
  const onBtSignup = async () => {
    try {
      if (emailRef.current?.value && passwordRef.current?.value) {
        // call API
        const res = await axios.post(
          "https://zealouscolor-us.backendless.app/api/data/accounts",
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }
        );
        alert(`Welcome ${res.data.email}`);
        router.push("/");
      } else {
        alert("Fill in all form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-96 bg-white p-6 shadow rounded-2xl m-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <Input type="email" placeholder="Input Email" ref={emailRef} />
        <Input type="password" placeholder="Input Password" ref={passwordRef} />
        <Button type="button" className="w-full" onClick={onBtSignup}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
