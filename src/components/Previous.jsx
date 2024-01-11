export default function Previous({ onClick }) {
  return (
    <button type="button" onClick={onClick} data-testid="prev-button">
      Previous
    </button>
  );
}
