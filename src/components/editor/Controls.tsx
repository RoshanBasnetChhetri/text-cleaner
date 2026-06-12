import { Button } from "@/components/ui/button";

type ControlsProps = {
  onClean: () => void;
  onCopy:()=>void;
  onReset:()=>void;
};

export function Controls({
  onClean,
  onCopy,
  onReset,
}: ControlsProps) {
  return (
    <div className="flex flex-wrap gap-2">
    <Button onClick={onClean}>
      Clean Text
    </Button>
    <Button variant="secondary"
     onClick={onCopy}>
     Copy Text
    </Button>
    <Button
        variant="outline"
        onClick={onReset}
      >
        Reset
      </Button>
    </div>
  );
}

// Components shouldn't know how text cleaning works 
// this component only knows
// Button Clicked
//Nothing else

    