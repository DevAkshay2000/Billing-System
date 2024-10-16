import { API } from "@/lib/api-routes";
import { HttpClient } from "@/lib/http";
import { useMutation } from "@tanstack/react-query";
import { IRegistration } from "../interfaces";

// it's a hook. make sure to use 'use' keyword before it
export const useAuthActions = () => {
  const register = (payload: IRegistration) => {
    // we can destructure and modify the payload accorfing to backend
    return HttpClient.post(API.auth.register, { ...payload });  // change the value of 'API.auth.register' according to backend path
  };

  const { mutate: registration, isPending: registrationPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      //perform on success tasks
    },
    onError: () => {
      //perform on error tasks
    },
  });

  return {
    registration,
    registrationPending,
  };
};
