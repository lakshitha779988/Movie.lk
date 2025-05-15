import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewMoreButton({path}) {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`flex justify-end mt-4 transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={() => navigate(`/${path}`)}
        className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700 mr-10 cursor-pointer mt-2"
      >
        View More
      </button>
    </div>
  );
}

export default ViewMoreButton;
