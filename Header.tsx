import { useState } from "react";
import { Button } from "../../shared/Button";
import { Image } from "../../shared/Image";
import { Link } from "../../shared/Link";
import { Sidebar } from "../Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(true);
  };
  return (
    <div className="w-full py-2 px-4 top-0 right-0 left-0 flex justify-between border-b border-b-gray-secondary">
      <Image
        className="w-1/12 ml-4"
        dataSrc={
          "https://frakton.com/wp-content/themes/frakton/images/frakton-black.svg"
        }
        alt={"logo"}
      />
      <div className="hidden md:flex justify-end w-full items-center">
        <Link
          className={"mx-4"}
          href={"/"}
          variant="uppercase"
          children={"blog"}
        />
        <Link
          className={"mx-4"}
          href={"/"}
          variant="uppercase"
          children={"about"}
        />
        <Link
          className={"mx-4"}
          href={"/"}
          variant="uppercase"
          children={"links"}
        />
        <Link
          className={"mx-4"}
          href={"/"}
          variant="uppercase"
          children={"projects"}
        />
      </div>
      {!showSidebar ? (
        <Button className="relative right-4" onClick={() => handleClick()}>
          {" "}
          <div className="flex flex-col justify-center md:hidden space-y-2">
            <span className="block h-px w-6 bg-black"></span>
            <span className="block h-px w-6 bg-black"></span>
            <span className="block h-px w-6 bg-black"></span>
          </div>
        </Button>
      ) : (
        ""
      )}

      {showSidebar ? (
        <Sidebar setShowSidebar={async () => setShowSidebar(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
