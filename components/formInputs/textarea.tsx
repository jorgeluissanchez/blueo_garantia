"use client"

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Textarea as TextareaField } from "@/components/ui/textarea"

export const Textarea = ({form, label, slug, descripcion, placeholder}: any) => {
  return (
    <FormField
    control={form.control}
    name={slug}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <TextareaField placeholder={placeholder} {...field} className="w-[318px]" />
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