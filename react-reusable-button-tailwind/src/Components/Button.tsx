import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Cn from "../Utils/Cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants>{
    children : ReactNode
}
const Button = ({
     children,
     className, 
     size,
     variant,
     ...props } : ButtonProps )=>{
    return (<button {...props} 
        // className={twMerge("bordered border-black rounded-md px-2 py-1 hover:bg-neutral-200", className)}
        className={Cn(ButtonVariants({variant,size,className}))}
        >{children}</button>)

}

//const ButtonVariants = cva("rounded-md font-semibold border rounded",{
const ButtonVariants = cva("text-center flex text-xs font-semibold h-full justify-evenly min-h-[32px] w-[142px] ml-0 p-2 rounded-md ",{   
    variants:{
        variant:{
            primary : "border-blue-600 text-white bg-blue-400 hover:bg-blue-600",
            secondary: "border-2 border-neutral-300 text-white bg-black hover:bg-neutral-800",
            danger:"border-none  text-white bg-red-500 hover:bg-red-600",
            success:"border-none  text-white bg-green-500 hover:bg-green-600",
            tertiary: "border-2 border-neutral-500 text-black bg-grey-200 hover:bg-grey-800",
            default: "bg-black text-white"
            //primary : "items-center flex h-full justify-evenly min-h-32px w-142px bg-#3363FF text-white font-semibold ml-0 p-2 rounded-lg border-none hover:cursor-pointer hover:opacity-80 hover:bg-blue-700 active:bg-#3363FF disabled:bg-blue-200;",
            // primary: "bg-blue-500 text-white hover:(bg-opacity-80) focus:(ring ring-blue-500)",
            // secondary: "items-center flex h-full justify-evenly min-h-[32px] w-[142px] bg-white text-black font-semibold ml-0 p-2 rounded-lg border-[none] hover:cursor-pointer hover:opacity-80 hover:bg-neutral-100 active:bg-neutral-50 disabled:bg-stone-100 disabled:opacity-[50%];",
            // tertiary: "items-center flex h-full justify-evenly min-h-[32px] w-[142px] bg-neutral-100 text-black font-semibold ml-0 p-2 rounded-lg border-[none] hover:cursor-pointer hover:opacity-80 hover:bg-slate-200 active:bg-neutral-100 disabled:bg-blue-200 disabled:opacity-[50%];",
            // danger:"border-none  text-white bg-red-500 hover:bg-red-600"
        },
        size:{
            sm:"text-sm px-1 py-0",
            md:"text-base px-2 py-1",
            lg:"text-xl px-4 py-1",
        }
    },
    defaultVariants:{
        variant : "primary",
        size : "md"
    }
})

export default Button;