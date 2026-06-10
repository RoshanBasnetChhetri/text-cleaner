"use client"

import { Controls } from "@/components/editor/Controls";
import { TextInput } from "@/components/editor/TextInput";
import { TextOutput } from "@/components/editor/TextOutput";
import { cleanText } from "@/lib/textCleaner";
import { useState } from "react";



// ask viewers
// why two states?

// Because : input --> users text, output--> processed text
// different responsibilites

// CONNECT THE ENGINE

export default function Page(){
  const [input, setInput] = useState("");
const [output, setOutput]= useState("");
const handleClean =()=>{
  const cleaned = cleanText(input,{removeExtraSpaces:true,});
  setOutput(cleaned)
}
  return (
    
      <div className="space-y-4">
  <TextInput
    value={input}
    onChange={setInput}
  />

  <Controls
    onClean={handleClean}
  />

  <TextOutput
    value={output}
  />
</div>
    
  )
}