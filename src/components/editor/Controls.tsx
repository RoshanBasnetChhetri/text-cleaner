import { Button } from "@/components/ui/button";

type ControlsProps = {
  onClean: () => void;
};

export function Controls({
  onClean,
}: ControlsProps) {
  return (
    <Button onClick={onClean}>
      Clean Text
    </Button>
  );
}

// Components shouldn't know how text cleaning works 
// this component only knows
// Button Clicked
//Nothing else

    