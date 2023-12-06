import React from "react";

interface BookCardProps {
  title: string;
  writer: string;
  imageUrl: string;
  price: number;
  tags: string[];
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  writer,
  imageUrl,
  price,
  tags,
}) => {
  return (
    <div className=" mx-auto rounded mt-4 overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Writer: {writer}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
