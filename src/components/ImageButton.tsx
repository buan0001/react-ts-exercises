type props = { imageURL: string };

export default function ImageButton({ imageURL }: props) {
  return (
    <>
      <button>
        <img src={imageURL} alt="not showing lol" />
      </button>
    </>
  );
}
