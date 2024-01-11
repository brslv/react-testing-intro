import "./Quote.css";

export default function Quote({ quote }) {
  return (
    <blockquote className="Quote" data-testid="quote">
      {quote}
    </blockquote>
  );
}
