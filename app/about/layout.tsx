import React from 'react'

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <nav className="text-blue-200">About NavBar</nav>
            <main>
                {children}
            </main>
        </>
  )
}
