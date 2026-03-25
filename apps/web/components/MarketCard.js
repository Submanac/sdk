export default function MarketCard({ market }) {
  return (
    <div>
      <h2>{market.title}</h2>
      <p>{market.description}</p>
    </div>
  );
}
