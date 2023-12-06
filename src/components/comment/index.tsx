import React, { useState } from "react";

function Comment(props: { likes: number; className?: string }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`flex items-center cursor-pointer  mr-4`}
      >
        <div className={`h-8 w-8 rounded-full ${isHovering && "bg-blue-200"} mr-1 flex items-center justify-center`}>
          <svg
            fill={isHovering ? "#60a5fa" : "#828db0"}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
          </svg>
        </div>
        <p className={`text-gray-600 ${isHovering && "text-blue-400"} `}>{props.likes}</p>
      </div>
    </>
  );
}

export default Comment;
