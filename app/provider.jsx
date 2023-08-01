"use client"
import {ThemeProvider} from 'next-themes'

function Provider({children}) {
    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    );
}

export default Provider;