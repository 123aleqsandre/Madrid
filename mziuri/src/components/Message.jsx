export default function Message({ count }) {
  let message = "start click to see your progress";
  if (count >= 5) {
    message = "barca < real Madrid";
  }
  if (count >= 20) {
    message = "2 - 1";
  }
  if (count >= 30) {
    message = "Mbappe";
  }
  if (count >= 40) {
    message = "Jude";
  }

  return <p>{message}</p>;
}
