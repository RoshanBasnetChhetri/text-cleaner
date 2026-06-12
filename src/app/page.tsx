/* trunk-ignore-all(prettier) */
"use client"

import { CleaningOptions } from "@/components/editor/CleaningOptions";
import { Controls } from "@/components/editor/Controls";
import { TextInput } from "@/components/editor/TextInput";
import { TextOutput } from "@/components/editor/TextOutput";
import { TextStats } from "@/components/editor/TextStats";
import { ThemeToggle } from "@/components/editor/ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useTextCleaner from "@/hooks/useTextCleaner";






// ask viewers
// why two states?

// Because : input --> users text, output--> processed text
// different responsibilites

// CONNECT THE ENGINE

export default function Page(){
  const {input, output, options, setInput, setOptions, handleClean, handleCopy, handleReset, characterCount, wordCount}=useTextCleaner()
  return (
<main>
  <div>
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
        <CardTitle>
          TextCleaner
        </CardTitle>
        <CardDescription>
          Clean, format and Optimize text instantly.
        </CardDescription>
        </div>
         <ThemeToggle />
      </CardHeader>
      <CardContent className="space-y-6">
         <TextStats
   characterCount={characterCount}
   wordCount={wordCount}
   />
  <TextInput
    value={input}
    onChange={setInput}
  />
  <CleaningOptions options={options} setOptions={setOptions} />

  <Controls 
    /* trunk-ignore(eslint) */
    onClean={handleClean}
    onCopy={handleCopy}
    onReset={handleReset}
  />

  <TextOutput
    value={output}
  />
</CardContent>

    </Card>

  </div>
</main>
    
  )
}