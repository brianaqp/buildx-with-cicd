import { useState } from "react";
import type { VoteCategory } from "./types";
import Button from "./Button";

function App() {
  const [vote, setVote] = useState<VoteCategory | null>(null);

  function handleVote(vote: VoteCategory) {
    setVote(vote);
  }

  return (
    <>
      <div className="flex justify-center w-full h-screen items-center text-white text-2xl">
        <div className="w-1/2 h-1/2 flex-col items-center gap-5">
          {vote !== null ? (
            <h1 className="text-center w-full">Voted for: {vote}</h1>
          ) : null}
          <div className="flex gap-5">
            <Button
              color="bg-green-600"
              categoryAssigned="cats"
              clickHandler={handleVote}
              makeBigger={vote === "cats" ? true : false}
            />
            <Button
              color="bg-blue-950"
              categoryAssigned="dogs"
              clickHandler={handleVote}
              makeBigger={vote === "dogs" ? true : false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
