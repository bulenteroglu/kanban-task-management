import LogoDark from "../../../public/assets/logo-dark.svg";

import data from "../../../utils/data.json";
import Boards from "../Boards/Boards";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

export default function Sidebar() {
  const { boards } = data;

  return (
    <div className="w-80 bg-white flex flex-col h-full">
      <div>
        <div className="p-8">
          <LogoDark />
        </div>

        <div className="mt-14">
          <p className="uppercase heading-s text-medium-grey mb-8 ml-8">
            all boards ({boards.length})
          </p>

          <div className="flex flex-col">
            <Boards boards={boards} />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <ThemeSelector />
      </div>
    </div>
  );
}
