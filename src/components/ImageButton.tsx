

type props = { image: string; onClick: VoidFunction };

export default function ImageButton({ image, onClick }: props) {
  // export default function ImageButton({ imageURL, event }: props) {
  return (
    <>
      <button onClick={onClick}>
        <img width={"50px"} height={"50px"} src={image} alt="not showing lol" />
      </button>
    </>
  );
}
