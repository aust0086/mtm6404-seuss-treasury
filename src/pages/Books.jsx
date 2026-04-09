import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import App from "../App.css";


function getRandomBooks(data, count) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function Books() {
    const [allBooks, setAllBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://seussology.info/api/books")
            .then((res) => res.json())
            .then((data) => {
                console.log("BOOKS API DATA:", data);

                const booksArray = Array.isArray(data) ? data : data.books;

                if (!Array.isArray(booksArray)) {
                    console.error("Books data is not an array!");
                    return;
                }

                setAllBooks(booksArray);
                setBooks(getRandomBooks(booksArray, 10));
            })
            .catch((err) => console.error("Error fetching books:", err));
    }, []);

    function loadRandomBooks() {
        setBooks(getRandomBooks(allBooks, 10));
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Books</h1>
            <p>Click on a book to see its details!</p>

            <button onClick={loadRandomBooks} style={{ marginBottom: "20px" }}>
                Load New Random Books
            </button>
            <div className="books-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <Link to={`/books/${book.id}`}>
                            <img src={book.image} alt={book.title}/>
                        </Link>
                        <p>{book.title}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;