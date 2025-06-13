"use client";
import RegisterForm from "@/components/auth/register-form";
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

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create Account</CardTitle>
        <CardDescription>
          Sign up to start organizing your tasks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
            onClick={() => dispatch(clearError())}>
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
