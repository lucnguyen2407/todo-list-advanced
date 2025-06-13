"use client";
import LoginForm from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/store/hooks";
import { clearError } from "@/store/slices/authSlice";
import Link from "next/link";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          {"Don't have an account? "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline"
            onClick={() => dispatch(clearError())}>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
