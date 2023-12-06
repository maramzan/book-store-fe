import React, { useState } from "react";
import axios from "axios";

export const BEARER_TOKEN = "8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D";

function Like(props: { likes: number; className?: string; post_id: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const likeAction = async (action: string) => {
    try {
      var formData = new FormData();
      formData.append("post_id", props.post_id);

      const res = await axios.post(`https://dmsglobal.net/ct-api/${action}`, formData, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });

      if (res.status === 200) {
        setIsLiked(action === "like" ? true : false);
        setLikes(action === "like" ? likes + 1 : likes - 1);
      } else {
        console.log(res.statusText);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`flex items-center cursor-pointer  mr-4`}
      >
        <div
          onClick={() => likeAction(isLiked ? "unlike" : "like")}
          className={`h-8 w-8 rounded-full ${isHovering && "bg-blue-200"} mr-1 flex items-center justify-center`}
        >
          <svg
            width={19}
            height={17}
            viewBox="0 0 19 17"
            fill={isHovering || isLiked ? "#60a5fa" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M9.06003 3.22517L9.49999 4.04008L9.93997 3.22519C10.2346 2.67941 10.7269 1.94618 11.4521 1.37771L11.1484 0.990173L11.4521 1.37771C12.1998 0.791639 13.0371 0.5 13.9531 0.5C16.5107 0.5 18.5 2.61569 18.5 5.54809C18.5 7.10494 17.8901 8.43531 16.7473 9.83285C15.5919 11.2459 13.929 12.6843 11.8689 14.4636L11.8689 14.4636L11.8684 14.464C11.1725 15.0651 10.3816 15.7482 9.55919 16.4771L9.55902 16.4773C9.54207 16.4923 9.52121 16.5 9.5 16.5C9.4788 16.5 9.45797 16.4923 9.44106 16.4773L9.4408 16.4771C8.61879 15.7486 7.82822 15.0657 7.13292 14.4652L7.13154 14.464L7.13153 14.464C5.0712 12.6845 3.40822 11.246 2.25274 9.83289C1.10993 8.4353 0.5 7.10494 0.5 5.54809C0.5 2.61569 2.48935 0.5 5.04688 0.5C5.96286 0.5 6.80016 0.791639 7.54786 1.37771L7.81436 1.03772L7.54786 1.37771C8.27311 1.94618 8.76536 2.67938 9.06003 3.22517Z"
              stroke={isHovering ? "#60a5fa" : "#677294"}
              strokeOpacity={0.5}
            />
          </svg>
        </div>
        <p className={`text-gray-600 ${(isHovering || isLiked) && "text-blue-400"} `}>{likes}</p>
      </div>
    </>
  );
}

export default Like;