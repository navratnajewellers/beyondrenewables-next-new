// "use client";
"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      Contact Page
      <h1>
        <a href={`/`}>Home Page</a>
      </h1>
    </div>
  );
}
