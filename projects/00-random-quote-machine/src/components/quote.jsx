export const QuoteBox = ({ quoteText, author }) => {
  return (
    <div>
      <h1 id="text">
        <i>{quoteText}</i>
      </h1>
      <p id="author">{author}</p>
    </div>
  );
};
