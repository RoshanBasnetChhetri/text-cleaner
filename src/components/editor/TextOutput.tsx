import { Textarea } from "@/components/ui/textarea";

type TextOutputProps = {
  value: string;
};

export function TextOutput({
  value,
}: TextOutputProps) {
  return (
    <Textarea
      readOnly
      value={value}
      className="min-h-45"
    />
  );
}


// explain 
// input changes data
// output only displays data 
// different responsibilites

