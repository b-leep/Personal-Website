import React from 'react'
import Link from "next/link"

export default function About() {
  return (
    <>
      <h1 className="text-blue-200">About</h1>
      <Link href="/" className="text-blue-400 hover:text-blue-500 underline">Link to Homepage</Link>
    </>
    
  )
}
