"use client"

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"  

    import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
    import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SelectProps {
    form: any,
    items: {
        label: string,
        value: string
    }[],
    label: string,
    slug: string,
    descripcion: string,
    placeholderInput: string,
    placeholderCommand: string
}

export const Select = ({form, items, label, slug, descripcion, placeholderInput, placeholderCommand}: SelectProps ) => {
  
  return (
    <FormField
    control={form.control}
    name={slug}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "w-[318px] justify-between",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value
                  ? items.find(
                      (item: any) => item.value === field.value
                    )?.label
                  : placeholderInput}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[318px] p-0">
            <Command>
              <CommandInput placeholder={placeholderCommand} />
              <CommandList>
                <CommandEmpty>No se encontraron resultados</CommandEmpty>
                <CommandGroup>
                  {items.map((item: any) => (
                    <CommandItem
                      value={item.label}
                      key={item.value}
                      onSelect={() => {
                        form.setValue(slug, item.value)
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          item.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <FormDescription  className={"w-[318px]"}>
            {descripcion}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  );
}