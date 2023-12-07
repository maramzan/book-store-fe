// Orders.js
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BookCard from "../../components/bookCard";
import axios from "axios";
import Modal from "../../components/model";
import { ToastContainer, toast } from "react-toastify";

const Orders: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderedBooks, setOrderedBooks] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  const fetchOrderedBooks = async () => {
    try {
      const userId = await localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:3000/orders/user/${userId}`
      );
      console.log(response.data);

      setOrderedBooks((prev) => [...response.data]);
    } catch (error) {
      alert(error);
    }
  };

  const cancelOrder = async (orderId: number) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log({ userId, orderId });
      const response = await axios.post(
        `http://localhost:3000/orders/cancel/${orderId}`,
        { userId }
      );
      if (response.status === 200) {
        setIsModalOpen((prev) => !prev);
        toast("Order cancelled successfully");
        setRefresh((prev) => !prev);
      }
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchOrderedBooks();
  }, [refresh]);

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col">
        <div className="container flex flex-wrap ">
          {orderedBooks?.length > 0 ? (
            orderedBooks?.map((book: any, index: any) => (
              <BookCard
                key={index}
                title={book?.book.title}
                writer={book?.book.writer}
                imageUrl={book?.book.coverImage}
                price={book?.book.point}
                tags={book?.book.tags}
                openModal={() => setIsModalOpen(true)}
                setSelectedBook={() => setSelectedBook(book)}
                status={book.status}
              />
            ))
          ) : (
            <h1 className="text-2xl text-center mt-10 w-full">No orders yet</h1>
          )}
        </div>

        {isModalOpen && selectedBook && (
          <Modal
            closeModal={() => setIsModalOpen(false)}
            selectedBook={selectedBook?.title}
            modalAction={() => cancelOrder(selectedBook?.id)}
            cancel
            // setOrders={setOrders}
          />
        )}
      </div>
    </>
  );
};

export default Orders;
