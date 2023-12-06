import axios from "axios";
import { useState } from "react";
import { Post } from "../../../types";

export const BEARER_TOKEN = "8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D";

export const useBook = () => {
  const [booksData, setBookData] = useState<any[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const config = {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
  };

  console.log("books lenght", booksData.length);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/books?page=${page}`
      );

      console.log(response.data);

      setBookData((prev) => [...prev, ...response.data]);
      15 > page ? setHasMore(true) : setHasMore(false);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("catch error", error);
    } finally {
      console.log("Done");
    }
  };

  return {
    booksData,
    hasMore,
    fetchData,
    keyword,
    setKeyword,
    setBookData,
  };
};
