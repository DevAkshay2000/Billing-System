"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RotateCw } from "lucide-react";
import { useAuthActions } from "../actions/useAuthActions";

// we can define the schema outside of the component
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Must be a valid email." }),
});

const AddUser = () => {
  /**
   * 'registrationPending' is a boolean value and it servs the purpose of  'isLoading'
   *
   * 'registration' is the function that will trigger server call
   */
  const { registration, registrationPending } = useAuthActions();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  function onFormSubmit(values: z.infer<typeof formSchema>) {
    // ... Do any preprocessing you want
    registration({
      ...values,
    });
    /**
     * If you want to get access to 'onSuccess' or 'onError' functions here you can do it in this way
     * registration({...values},{onSuccess:()=>{ //  Do what you want to do on success   }})
     */
  }

  return (
    <>
      <div className="flex items-center bg-gray-200 justify-center h-screen w-full">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-md py-6 px-3 mt-6 border">
          <h4 className="w-full font-bold text-lg pb-1 border border-r-0  border-t-0 border-l-0">
            Demo form
          </h4>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onFormSubmit)}
              className="space-y-3 mt-4"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-0 mb-0">
                    <FormLabel className="text-xs text-fade font-medium">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-xs"
                        placeholder="Enter first name"
                        {...field}
                        onChange={(e) => {
                          // custom logic
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-0 mb-0">
                    <FormLabel className="text-xs text-fade font-medium">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-xs"
                        placeholder="Enter last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0 mb-0">
                    <FormLabel className="text-xs text-fade font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-xs"
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-2 hover:bg-baseHover">
                Invite
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
