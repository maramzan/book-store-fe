import dayjs from "dayjs";
import { Post } from "../../types";
import Comment from "../comment";
import HeartIcon from "../like";

const Tweet = ({ post }: { post: Post }) => {
  return (
    <div className="flex py-4 border-b border-gray-200">
      <img
        className="object-cover w-14 h-14 mr-4 rounded-full"
        src={post?.user.profile_image_url}
        alt="avatar"
      />
      <div>
        <div className="flex items-center mb-2">
          <h2 className="font-bold mr-2">{`${post.user.first_name} ${post.user.last_name}`}</h2>
          <p className="text-sm text-gray-600">
            {dayjs(post.created_at).fromNow()}
          </p>
        </div>
        <p className="mb-2">{post.text}</p>
        {
          <img
            className="w-full rounded-lg"
            src={post?.user.profile_image_url}
            alt="port image"
          />
        }
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <HeartIcon likes={post.likes_count} post_id={post.id} />
              <Comment likes={post.replies_count} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
