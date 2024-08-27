"use client";

import SelectField from "@/components/sharedComponents/SelectField";
import TextField from "@/components/sharedComponents/TextField";
import ToggleButton from "@/components/sharedComponents/ToggleButton";
import DateField from "@/components/sharedComponents/DateField";
import React from "react";
import DateRangeField from "@/components/sharedComponents/DateRangeField";
import CheckboxField from "@/components/sharedComponents/CheckBoxField";
import DropDownWithSearchField from "@/components/sharedComponents/DropDownWIthSearchField";
import TextAreaField from "@/components/sharedComponents/TextAreaField";
export default function Home() {
  const options = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    console.log(e);
  };
  const arr = [
    {
      id: 1,
      value: "Akshay",
    },
    {
      id: 2,
      value: "Saquib",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <TextField
        label="Enter email"
        type="email"
        placeholder="Enter Email"
        name="email"
      />

      <SelectField
        options={arr}
        label="Select Name"
        placeholder="Select Name"
      />

      <ToggleButton />
      <DateField />
      <DateRangeField />
      <CheckboxField name="check" label="This is label" />
      <DropDownWithSearchField options={options} />
      <TextAreaField />
    </div>
  );
}
