/* trunk-ignore-all(prettier) */
import { useState } from "react";
import { CleanOptions, cleanText } from "@/lib/textCleaner";
import {toast} from "sonner";

const defaultOptions: CleanOptions = {
  removeExtraSpaces: true,
  removeLineBreaks: false,
  removeSpecialChars: false,
};

export default function useTextCleaner() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState<CleanOptions>(defaultOptions);

  const handleClean = () => {
    const cleaned = cleanText(input, options);
    setOutput(cleaned);
  };
  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard");
  };
  const handleReset = () => {
    setInput("");
    setOutput("");
    setOptions(defaultOptions);
  };

  const wordCount = input.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = input.length;

  return {
    input,
    output,
    options,
    setInput,
    setOptions,
    handleClean,
    handleCopy,
    handleReset,
    characterCount,
    wordCount,
  };
}
