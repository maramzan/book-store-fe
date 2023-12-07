import axios from "axios";
import { useState } from "react";
import { Book } from "../../../types";
import { toast } from "react-toastify";

export const BEARER_TOKEN = "8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D";

export const useBook = () => {
  const [booksData, setBookData] = useState<Book[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/books?page=${page}`
      );
      setBookData((prev) => [...prev, ...response.data.books]);
      response.data.totalPages > page ? setHasMore(true) : setHasMore(false);
      setPage((prev) => prev + 1);
    } catch (error) {
      alert(error);
    }
  };

  const orderBook = async (bookId: number) => {
    try {
      const userId = await localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:3000/orders/purchase`,
        { bookId, userId }
      );
      if (response?.data?.status === "PURCHASED") {
        setIsModalOpen((prev) => !prev);
        toast("Order placed successfully");
      } else {
        setIsModalOpen((prev) => !prev);
        toast("Not enough balance");
      }
    } catch (error) {
      alert(error);
    }
  };

  return {
    booksData,
    hasMore,
    fetchData,
    keyword,
    setKeyword,
    setBookData,
    isModalOpen,
    setIsModalOpen,
    selectedBook,
    setSelectedBook,
    orderBook,
  };
};
