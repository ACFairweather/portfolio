import Link from "next/link";
import { Component } from "react";
import BookTable from '../components/BookTable';
import { Navbar } from '../components/Navbar';

function MyApp({}) {
    return (
      <>
        <Navbar/>
        <BookTable/>
         
      </>
    )
    
  }
  
  export default MyApp;


