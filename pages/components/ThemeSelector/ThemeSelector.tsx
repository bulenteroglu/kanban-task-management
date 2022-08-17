import { useTheme } from "next-themes";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-selago rounded-md flex justify-center m-6 p-4">
      <div>switch</div>
    </div>
  );
}
