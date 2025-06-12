import { useState } from "react";
import "./App.css";
import { QuoteBox } from "./components/quote";

function App() {
  const primaryColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;

  $(document).ready(function () {
    $("body").css("background-color", primaryColor);
    $("body").css("transition", "background-color 400ms linear");
    $("body").css("color", primaryColor);
    $("body").css("transition", "color 400ms linear");
    $("button").css("background-color", primaryColor);
    $("button").css("transition", "background-color 400ms linear");
  });

  const quotes = [
    {
      q: "Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. ",
      a: "George Washington",
      c: "114",
      h: "\u003Cblockquote\u003E&ldquo;Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. &rdquo; &mdash; \u003Cfooter\u003EGeorge Washington\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy.",
      a: "Elon Musk",
      c: "139",
      h: "\u003Cblockquote\u003E&ldquo;One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The only man who never makes mistakes is the man who never does anything.",
      a: "Theodore Roosevelt",
      c: "73",
      h: "\u003Cblockquote\u003E&ldquo;The only man who never makes mistakes is the man who never does anything.&rdquo; &mdash; \u003Cfooter\u003ETheodore Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Creative endeavors are by their nature uncertain.",
      a: "Robert Greene",
      c: "49",
      h: "\u003Cblockquote\u003E&ldquo;Creative endeavors are by their nature uncertain.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "It takes a very long time to become young.",
      a: "Pablo Picasso",
      c: "42",
      h: "\u003Cblockquote\u003E&ldquo;It takes a very long time to become young.&rdquo; &mdash; \u003Cfooter\u003EPablo Picasso\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Waste not fresh tears over old griefs.",
      a: "Euripides",
      c: "38",
      h: "\u003Cblockquote\u003E&ldquo;Waste not fresh tears over old griefs.&rdquo; &mdash; \u003Cfooter\u003EEuripides\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Charms strike the sight, but merit wins the soul.",
      a: "Alexander Pope",
      c: "49",
      h: "\u003Cblockquote\u003E&ldquo;Charms strike the sight, but merit wins the soul.&rdquo; &mdash; \u003Cfooter\u003EAlexander Pope\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Fortunate are those who take the first steps.",
      a: "Paulo Coelho",
      c: "45",
      h: "\u003Cblockquote\u003E&ldquo;Fortunate are those who take the first steps.&rdquo; &mdash; \u003Cfooter\u003EPaulo Coelho\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Falling down is not failure. Failure comes when you stay where you have fallen.",
      a: "Socrates",
      c: "79",
      h: "\u003Cblockquote\u003E&ldquo;Falling down is not failure. Failure comes when you stay where you have fallen.&rdquo; &mdash; \u003Cfooter\u003ESocrates\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Fashion fades, only style remains the same.",
      a: "Coco Chanel",
      c: "43",
      h: "\u003Cblockquote\u003E&ldquo;Fashion fades, only style remains the same.&rdquo; &mdash; \u003Cfooter\u003ECoco Chanel\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Faithless is he that says farewell when the road darkens.",
      a: "J.R.R. Tolkien",
      c: "57",
      h: "\u003Cblockquote\u003E&ldquo;Faithless is he that says farewell when the road darkens.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Arise, slay thy enemies, enjoy a prosperous kingdom.",
      a: "Bhagavad Gita",
      c: "52",
      h: "\u003Cblockquote\u003E&ldquo;Arise, slay thy enemies, enjoy a prosperous kingdom.&rdquo; &mdash; \u003Cfooter\u003EBhagavad Gita\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "I begin with an idea and then it becomes something else.",
      a: "Pablo Picasso",
      c: "56",
      h: "\u003Cblockquote\u003E&ldquo;I begin with an idea and then it becomes something else.&rdquo; &mdash; \u003Cfooter\u003EPablo Picasso\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Life has the name of life, but in reality it is death.",
      a: "Heraclitus",
      c: "54",
      h: "\u003Cblockquote\u003E&ldquo;Life has the name of life, but in reality it is death.&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "A liar knows that he is a liar, but one who speaks mere portions of truth in order to deceive is a craftsman of destruction.",
      a: "Criss Jami",
      c: "124",
      h: "\u003Cblockquote\u003E&ldquo;A liar knows that he is a liar, but one who speaks mere portions of truth in order to deceive is a craftsman of destruction.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Becoming a great leader doesn't mean being perfect. it means living with your imperfections.",
      a: "Lolly Daskal",
      c: "92",
      h: "\u003Cblockquote\u003E&ldquo;Becoming a great leader doesn't mean being perfect. it means living with your imperfections.&rdquo; &mdash; \u003Cfooter\u003ELolly Daskal\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Integrity is the ability to stand by an idea.",
      a: "Ayn Rand",
      c: "45",
      h: "\u003Cblockquote\u003E&ldquo;Integrity is the ability to stand by an idea.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The enemy is a very good teacher.",
      a: "Dalai Lama",
      c: "33",
      h: "\u003Cblockquote\u003E&ldquo;The enemy is a very good teacher.&rdquo; &mdash; \u003Cfooter\u003EDalai Lama\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Man is affected not by events but by the view he takes of them.  ",
      a: "Seneca",
      c: "65",
      h: "\u003Cblockquote\u003E&ldquo;Man is affected not by events but by the view he takes of them.  &rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "People who say it cannot be done should not interrupt those who are doing it.",
      a: "George Bernard Shaw",
      c: "77",
      h: "\u003Cblockquote\u003E&ldquo;People who say it cannot be done should not interrupt those who are doing it.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "You have as much laughter as you have faith.",
      a: "Martin Luther",
      c: "44",
      h: "\u003Cblockquote\u003E&ldquo;You have as much laughter as you have faith.&rdquo; &mdash; \u003Cfooter\u003EMartin Luther\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "You must welcome change as the rule but not as your ruler. ",
      a: "Denis Waitley",
      c: "59",
      h: "\u003Cblockquote\u003E&ldquo;You must welcome change as the rule but not as your ruler. &rdquo; &mdash; \u003Cfooter\u003EDenis Waitley\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Try all things, hold fast that which is good.",
      a: "John Locke",
      c: "45",
      h: "\u003Cblockquote\u003E&ldquo;Try all things, hold fast that which is good.&rdquo; &mdash; \u003Cfooter\u003EJohn Locke\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Happiness is the absence of the striving for happiness.",
      a: "Zhuangzi",
      c: "55",
      h: "\u003Cblockquote\u003E&ldquo;Happiness is the absence of the striving for happiness.&rdquo; &mdash; \u003Cfooter\u003EZhuangzi\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
      a: "Paulo Coelho",
      c: "86",
      h: "\u003Cblockquote\u003E&ldquo;There is only one thing that makes a dream impossible to achieve: the fear of failure.&rdquo; &mdash; \u003Cfooter\u003EPaulo Coelho\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Relax. Nothing is under control.",
      a: "Adi Da Samraj",
      c: "32",
      h: "\u003Cblockquote\u003E&ldquo;Relax. Nothing is under control.&rdquo; &mdash; \u003Cfooter\u003EAdi Da Samraj\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "People are doing the best that they can from their own level of consciousness.",
      a: "Deepak Chopra",
      c: "78",
      h: "\u003Cblockquote\u003E&ldquo;People are doing the best that they can from their own level of consciousness.&rdquo; &mdash; \u003Cfooter\u003EDeepak Chopra\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The only way out is through.",
      a: "Robert Frost",
      c: "28",
      h: "\u003Cblockquote\u003E&ldquo;The only way out is through.&rdquo; &mdash; \u003Cfooter\u003ERobert Frost\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "If you cling to a certain thought with dynamic will power, it finally assumes a tangible outward form.",
      a: "Paramahansa Yogananda",
      c: "102",
      h: "\u003Cblockquote\u003E&ldquo;If you cling to a certain thought with dynamic will power, it finally assumes a tangible outward form.&rdquo; &mdash; \u003Cfooter\u003EParamahansa Yogananda\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
      a: "Dan Millman",
      c: "109",
      h: "\u003Cblockquote\u003E&ldquo;The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.&rdquo; &mdash; \u003Cfooter\u003EDan Millman\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The most virtuous are those who content themselves with being virtuous without seeking to appear so.",
      a: "Plato",
      c: "100",
      h: "\u003Cblockquote\u003E&ldquo;The most virtuous are those who content themselves with being virtuous without seeking to appear so.&rdquo; &mdash; \u003Cfooter\u003EPlato\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "We are willing to believe anything other than the truth.",
      a: "Carlos Ruiz Zafon",
      c: "56",
      h: "\u003Cblockquote\u003E&ldquo;We are willing to believe anything other than the truth.&rdquo; &mdash; \u003Cfooter\u003ECarlos Ruiz Zafon\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "One loyal friend is worth ten thousand relatives.",
      a: "Euripides",
      c: "49",
      h: "\u003Cblockquote\u003E&ldquo;One loyal friend is worth ten thousand relatives.&rdquo; &mdash; \u003Cfooter\u003EEuripides\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The chief enemy of creativity is good sense.",
      a: "Pablo Picasso",
      c: "44",
      h: "\u003Cblockquote\u003E&ldquo;The chief enemy of creativity is good sense.&rdquo; &mdash; \u003Cfooter\u003EPablo Picasso\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Obstacles are those frightful things you see when you take your eyes off your goals.",
      a: "Sydney Smith",
      c: "84",
      h: "\u003Cblockquote\u003E&ldquo;Obstacles are those frightful things you see when you take your eyes off your goals.&rdquo; &mdash; \u003Cfooter\u003ESydney Smith\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Make your stand today. On this spot. On this day.",
      a: "Ming-Dao Deng",
      c: "49",
      h: "\u003Cblockquote\u003E&ldquo;Make your stand today. On this spot. On this day.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Observe things as they are and don't pay attention to other people.",
      a: "Huang Po",
      c: "67",
      h: "\u003Cblockquote\u003E&ldquo;Observe things as they are and don't pay attention to other people.&rdquo; &mdash; \u003Cfooter\u003EHuang Po\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "We are all faced with a series of great opportunities brilliantly disguised as impossible situations. ",
      a: "Charles Swindoll",
      c: "102",
      h: "\u003Cblockquote\u003E&ldquo;We are all faced with a series of great opportunities brilliantly disguised as impossible situations. &rdquo; &mdash; \u003Cfooter\u003ECharles Swindoll\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Just do the best you can. No one can do more than that.",
      a: "John Wooden",
      c: "55",
      h: "\u003Cblockquote\u003E&ldquo;Just do the best you can. No one can do more than that.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Life is growth. If we stop growing, technically and spiritually, we are as good as dead.",
      a: "Morihei Ueshiba",
      c: "88",
      h: "\u003Cblockquote\u003E&ldquo;Life is growth. If we stop growing, technically and spiritually, we are as good as dead.&rdquo; &mdash; \u003Cfooter\u003EMorihei Ueshiba\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Don't let the behavior of others destroy your inner peace.",
      a: "Dalai Lama",
      c: "58",
      h: "\u003Cblockquote\u003E&ldquo;Don't let the behavior of others destroy your inner peace.&rdquo; &mdash; \u003Cfooter\u003EDalai Lama\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "You have to keep breaking your heart until it opens.",
      a: "Rumi",
      c: "52",
      h: "\u003Cblockquote\u003E&ldquo;You have to keep breaking your heart until it opens.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Show kindness but never expect it. Show authenticity but never expect it. Only the wise are indifferent to things they can't control.",
      a: "Maxime Lagace",
      c: "133",
      h: "\u003Cblockquote\u003E&ldquo;Show kindness but never expect it. Show authenticity but never expect it. Only the wise are indifferent to things they can't control.&rdquo; &mdash; \u003Cfooter\u003EMaxime Lagace\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Definitions belong to the definers, not the defined.",
      a: "Toni Morrison",
      c: "52",
      h: "\u003Cblockquote\u003E&ldquo;Definitions belong to the definers, not the defined.&rdquo; &mdash; \u003Cfooter\u003EToni Morrison\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Alone we can do so little; together we can do so much.",
      a: "Helen Keller",
      c: "54",
      h: "\u003Cblockquote\u003E&ldquo;Alone we can do so little; together we can do so much.&rdquo; &mdash; \u003Cfooter\u003EHelen Keller\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Luck is a matter of preparation meeting opportunity.",
      a: "Oprah Winfrey",
      c: "52",
      h: "\u003Cblockquote\u003E&ldquo;Luck is a matter of preparation meeting opportunity.&rdquo; &mdash; \u003Cfooter\u003EOprah Winfrey\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
      a: "Benjamin Franklin",
      c: "86",
      h: "\u003Cblockquote\u003E&ldquo;Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Light a candle instead of cursing the darkness.",
      a: "Eleanor Roosevelt",
      c: "47",
      h: "\u003Cblockquote\u003E&ldquo;Light a candle instead of cursing the darkness.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "The moment you doubt whether you can fly, you cease for ever to be able to do it.",
      a: "James Matthew Barrie",
      c: "81",
      h: "\u003Cblockquote\u003E&ldquo;The moment you doubt whether you can fly, you cease for ever to be able to do it.&rdquo; &mdash; \u003Cfooter\u003EJames Matthew Barrie\u003C/footer\u003E\u003C/blockquote\u003E",
    },
    {
      q: "Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.",
      a: "Ming-Dao Deng",
      c: "111",
      h: "\u003Cblockquote\u003E&ldquo;Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E",
    },
  ];
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * 50)]);

  const generateNewQuote = () => {
    let newQuote = quote;
    newQuote = quotes[Math.floor(Math.random() * 50)];
    setQuote(newQuote);
  };

  return (
    <div id="quote-box">
      <QuoteBox quoteText={quote.q} author={quote.a} />
      <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
        <button>
          <i class="fa-brands   fa-twitter" title="Next Page"></i>
        </button>
      </a>
      <a>
        <button>
          <i class="fa-brands fa-tumblr"></i>
        </button>
      </a>
      <button id="new-quote" onClick={generateNewQuote}>
        New quote
      </button>
    </div>
  );
}

export default App;
