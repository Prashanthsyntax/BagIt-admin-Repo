import { ReactNode } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}> ) {


    // Todo: Check if user is authenticated and if user is an 


    return <>
    <p>Admin layout</p>
        {children}
    </>
}