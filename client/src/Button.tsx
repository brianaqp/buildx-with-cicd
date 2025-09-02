import type { VoteCategory } from "./types";

type Props = {
  color: string;
  categoryAssigned: VoteCategory;
  clickHandler: (vote: VoteCategory) => void;
  makeBigger: boolean;
};

function Button({ color, categoryAssigned, clickHandler, makeBigger }: Props) {
  return (
    <>
      <button
        className={`w-100 h-100 transition-all rounded-2xl ${color} 
        ${makeBigger ? "w-150" : null } `
        }
        onClick={() => clickHandler(categoryAssigned)}
      >
        {categoryAssigned}
      </button>
    </>
  );
}

export default Button;
