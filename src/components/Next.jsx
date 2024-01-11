export default function Next({ onClick }) {
  return (
    <button type="button" onClick={onClick} data-testid="next-button">
      Next
    </button>
  );
}
