
import { CleanOptions } from "@/lib/textCleaner";
import { Switch } from "../ui/switch";
type CleaningOptionsProps = {
  options: CleanOptions;
  setOptions: React.Dispatch<
    React.SetStateAction<CleanOptions>
  >;
};

export function CleaningOptions ({options, setOptions}:CleaningOptionsProps) {
  return(
    <Switch
  checked={options.removeExtraSpaces}
  onCheckedChange={(checked) =>
    setOptions((prev: any) => ({
      ...prev,
      removeExtraSpaces: checked,
    }))
  }
/>
  )
}

