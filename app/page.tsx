import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  function Play() {
    if (!isLoading) {
      document.dispatchEvent(new Event("playerplay"));
    }
  }

  function Pause() {
    if (!isLoading) {
      document.dispatchEvent(new Event("playerpause"));
    }
  }

  return (
    <>
      <button onClick={Play}>play</button>
      <button onClick={Pause}>pause</button>
    </>
  );
}
