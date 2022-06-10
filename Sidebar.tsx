import { Button } from "../../shared/Button";
import { Link } from "../../shared/Link";
import { SidebarProps } from "./sidebar.types";

const Sidebar = ({ setShowSidebar }: SidebarProps) => {
  return (
    <div>
      <div className="top-0 right-0 w-[35vw] flex flex-col justify-start p-4 items-center bg-black text-white fixed h-full z-40">
        <Button className="right-8 absolute clear-both" onClick={setShowSidebar}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <Link
          className={"mt-4"}
          href={"/"}
          variant="whiteUppercase"
          children={"blog"}
        />
        <Link
          className={"mt-4"}
          href={"/"}
          variant="whiteUppercase"
          children={"about"}
        />
        <Link
          className={"mt-4"}
          href={"/"}
          variant="whiteUppercase"
          children={"links"}
        />
        <Link
          className={"mt-4"}
          href={"/"}
          variant="whiteUppercase"
          children={"projects"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
