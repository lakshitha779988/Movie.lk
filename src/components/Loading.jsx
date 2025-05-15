import React, { useEffect, useState } from "react";

const Loading = () => {
 

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-yellow-400"></div>
    </div>
  );
};

export default Loading;
