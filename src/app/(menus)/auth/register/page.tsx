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

const AddUser = () => {
  const formSchema = z.object({
    firstname: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    isAdmin: z.boolean().optional(),
    email: z.string().email({ message: "Must be a valid email." }),
    orgId: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>();
  // {
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     isAdmin: false,
  //     orgId: "",
  //   },
  // }

  function onFormSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <>
      <h4 className="w-full font-bold text-lg pb-1 border border-r-0  border-t-0 border-l-0">
        Invite user
      </h4>
      <div className="w-full rounded-md py-6 px-3 mt-6 border">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3 mt-4"
          >
            <FormField
              control={form.control}
              name="firstname"
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
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
                      // @ts-ignore
                      onKeyUp={(e) => setSearchKey(e.target?.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isAdmin"
              render={() => (
                <FormItem>
                  <FormLabel className="text-[0.8rem] font-medium text-fade flex items-center">
                    isAdmin
                  </FormLabel>
                  <FormControl>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {1 ? (
              <Button
                disabled
                type="button"
                className="mt-2 bg-base flex gap-2 hover:bg-baseHover"
              >
                <RotateCw size={15} className="animate-spin" /> Inviting...
              </Button>
            ) : (
              <Button type="submit" className="mt-2 bg-base hover:bg-baseHover">
                Invite
              </Button>
            )}
          </form>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
