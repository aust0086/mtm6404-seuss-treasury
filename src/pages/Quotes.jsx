import { useEffect, useState } from "react";
import App from "../App.css";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div className="quotes-page">
      <h1>Quotes</h1>
      {quotes.map((quote, index) => (
        <div className="quotes-ind">
        <p key={index}>"{quote.text}"
        <blockquote>- {quote.book.title}</blockquote>
        </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;