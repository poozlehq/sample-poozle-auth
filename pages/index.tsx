import { usePoozleLink } from "@poozle/react-poozle-link";

export default function Home() {
  const { open: poozleOpen, isReady } = usePoozleLink({
    linkId: "bb966689-5b7e-4aee-ac78-fe036c2612ce",
    baseURL: "http://localhost:3001",
  });

  return (
    <>
      <button disabled={!isReady} onClick={poozleOpen}>
        Preview linking experience
      </button>
    </>
  );
}
