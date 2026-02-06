"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    const isAuthenticated = false; // Replace with actual authentication logic
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return null; // Render nothing while redirecting
};

export default Home;
