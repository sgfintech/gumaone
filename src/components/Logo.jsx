import React from "react";
import { Link } from "react-router-dom";

/* Official Guma One brand mark. Keep the original artwork in public/logos. */
export default function Logo({ className = "", light = false }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Guma One home">
      <img
        src="/logos/gumaone-header.webp"
        alt="Guma One — Network of Direct-to-Consumer Business Apps"
        className={`block w-auto max-w-[180px] sm:max-w-[220px] h-auto max-h-[52px] object-contain ${light ? "bg-white rounded-sm" : ""}`}
      />
    </Link>
  );
}
