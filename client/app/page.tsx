"use client";
import useRedirect from "@/hooks/useUserRedirect";

export default function Home() {
  useRedirect("/login");

  return <main></main>;
}
