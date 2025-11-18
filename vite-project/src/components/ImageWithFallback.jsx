import React, { useState } from "react";

export default function ImageWithFallback({ src, alt, className }) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(
      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage not found%3C/text%3E%3C/svg%3E"
    );
  };

  return (
    <img src={imageSrc} alt={alt} className={className} onError={handleError} />
  );
}
