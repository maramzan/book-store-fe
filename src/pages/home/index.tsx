import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useBook } from "./hooks/useBook";
import BookCard from "../../components/bookCard";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Modal from "../../components/model";

const Timeline = () => {
  const {
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
  } = useBook();

  // const [orders, setOrders] = useState([]);
  // console.log("orders", orders);

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const filterWithKeyword = setTimeout(async () => {
      const response = await axios.get(
        `http://localhost:3000/books/search?query=${keyword}`
      );
      setBookData(response?.data);
      console.log("filtered response", response?.data);
    }, 1000);

    return () => clearTimeout(filterWithKeyword);
  }, [keyword]);

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col">
        <div className="flex justify-center mt-5">
          <input
            className="w-full max-w-md  h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
        <InfiniteScroll
          dataLength={booksData.length}
          next={keyword ? () => {} : fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            // design a horizontal line here with width 50%
            <hr className="mt-10 mb-10 " />
          }
        >
          <div className="container flex flex-wrap ">
            {booksData?.map((book, index) => (
              <BookCard
                key={index}
                title={book?.title}
                writer={book.writer}
                imageUrl={book.coverImage}
                price={book.point}
                tags={book.tags}
                openModal={openModal}
                setSelectedBook={() => setSelectedBook(book)}
              />
            ))}
          </div>
          {isModalOpen && selectedBook && (
            <Modal
              closeModal={closeModal}
              selectedBook={selectedBook}
              // setOrders={setOrders}
            />
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Timeline;
