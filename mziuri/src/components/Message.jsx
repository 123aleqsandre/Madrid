export default function Message({ count }) {
  let message = "start click to see your progress";
  if (count >= 5) {
    message = "barca < real Madrid";
  }
  if (count >= 20) {
    message = "kaka";
  }
  if (count >= 30) {
    message = "benzema";
  }
  if (count >= 40) {
    message = "hala madrid";
  }

  return <p>{message}</p>;
}
