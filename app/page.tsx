"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = false; // Replace with actual authentication logic
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
    </div>
  );
};

export default HomePage;
