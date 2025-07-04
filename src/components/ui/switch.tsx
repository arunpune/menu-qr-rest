"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "~/utils/cn";
import { type Path, type Control } from "react-hook-form";
import { FormField } from "./form";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export const ControlledSwitch = <T extends object>({
  className,
  control,
  name,
  ...props
}: {
  className?: string;
  control: Control<T>;
  name: Path<T>;
} & React.ComponentPropsWithoutRef<typeof Switch>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...props}
          onCheckedChange={(checked) => field.onChange(checked)}
          checked={field.value}
          className={cn(className)}
        />
      )}
    />
  );
};

ControlledSwitch.displayName = Switch.displayName;

export { Switch };
