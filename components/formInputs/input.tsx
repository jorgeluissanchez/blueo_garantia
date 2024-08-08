"use client"

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input as InputField } from "@/components/ui/input"

export const Input = ({form, label, slug, descripcion, placeholder}: any) => {
  return (
    <FormField
    control={form.control}
    name={slug}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <InputField placeholder={placeholder} {...field} className="w-[318px]" />
        </FormControl>
        <FormDescription>
          {descripcion}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  );
}