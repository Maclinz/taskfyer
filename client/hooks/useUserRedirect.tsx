"use cleint";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (redirect: string) => {
  const { userLoginStatus } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      try {
        const isLoggedUser = await userLoginStatus();

        if (!isLoggedUser) {
          router.push(redirect);
        }
      } catch (error) {
        console.log("Error in redirecting User", error);
      }
    };

    redirectUser();
  }, [redirect, userLoginStatus, router]);
};

export default useRedirect;
