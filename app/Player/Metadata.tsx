import Image from "next/image";
import Cover from "../../src/img/cover.jpg";

export default function Metadata() {
  return (
    <div className="flex flex-row items-center">
      <div className="h-14 w-14">
        <div>
          <Image width={500} height={500} src={Cover} alt="Cover" />
        </div>
      </div>
      <div className="flex flex-col ">
        <div>playing</div>
        <div>artistºalbun</div>
      </div>
      <div className="flex-grow">
        <div>like</div>
        <div>options</div>
      </div>
    </div>
  );
}
