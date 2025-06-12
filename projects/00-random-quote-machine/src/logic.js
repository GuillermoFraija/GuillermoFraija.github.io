export const generateNewQuote = (quotes) => {
  const quote = quotes[Math.floor(Math.random() * 50)];

  return quote;
};
