import React from "react";
// Adjust the import path to wherever you saved GlobalLoader
import GlobalLoader from "./components/GlobalLoader"; 

export default function Loading() {
  // Next.js automatically wraps your pages in a Suspense boundary 
  // and displays this component while the new page loads.
  return <GlobalLoader />;
}