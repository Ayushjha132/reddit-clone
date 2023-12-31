"use client";

import { FC, useState } from "react";
import { Button, } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

// allow to use div elements 
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {

const [isLoading, setIsLoading ] = useState(false);
const {toast} = useToast(); 

const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
        await signIn('google')
    } catch (error) {
        //toast notification
        toast({
            title: 'Error',
            description: 'There was an error logging in with Google',
            variant: 'destructive',
          })
    }finally{
        setIsLoading(false);
    }
}
  return (
    <div className={cn("flex  justify-center", className)} {...props}>
        <Button onClick={loginWithGoogle} isLoading={isLoading} size="sm" className="w-full">{isLoading ? null : <Icons.google className="h-4 w-4 mr-2"/>}Google</Button>
    </div>
  )
}

export default UserAuthForm;