import React, { useState } from "react";
import { toast } from "react-toastify";

interface BookCardProps {
  title: string;
  writer: string;
  imageUrl: string;
  price: number;
  tags: string[];
  openModal: () => void;
  setSelectedBook: (book: {
    title: string;
    writer: string;
    imageUrl: string;
    price: number;
    tags: string[];
  }) => void;
  status?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  writer,
  imageUrl,
  price,
  tags,
  openModal,
  setSelectedBook,
  status,
}) => {
  const handleClick = () => {
    if (status === "CANCELLED") {
      toast("Order is already cancelled");
      return;
    }
    setSelectedBook({ title, writer, imageUrl, price, tags });
    openModal();
  };
  return (
    <div
      className=" mx-auto cursor-pointer rounded mt-4 overflow-hidden shadow-lg"
      onClick={handleClick}
    >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Writer: {writer}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        {status && (
          <p className="text-gray-700 font-semibold text-base mb-2">{status}</p>
        )}

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
