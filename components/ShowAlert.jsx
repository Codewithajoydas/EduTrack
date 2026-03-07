import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useEffect } from "react";

export const ShowAlert = ({ title, type, message, setShow, show }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow({
                show: false,
                message: "",
                type: "",
            });
        }, 5000);
        return () => clearTimeout(timer);
    }, [show])
  return (
    <div className="fixed bottom-3 right-3 z-10">
      <Alert variant={type == "error" ? "destructive" : ""} className={'w-80'}>
        <Info />
        <AlertTitle className={'text-left'}>{title}</AlertTitle>
        <AlertDescription className={'text-left'}>{message}</AlertDescription>
      </Alert>
    </div>
  );
};
