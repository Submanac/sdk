export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: "10px 20px",
      background: "black",
      color: "white",
      border: "none"
    }}>
      {children}
    </button>
  );
}
