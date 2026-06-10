export type CleanOptions = {
  removeExtraSpaces?: boolean;
  removeLineBreaks?: boolean;
  removeSpecialChars?: boolean;
};

export function cleanText(text: string, options: CleanOptions) {
  let result = text;

  // Step 1: remove extra spaces
  if (options.removeExtraSpaces) {
    result = result.replace(/\s+/g, " ").trim();
  }

  // Step 2: remove line breaks
  if (options.removeLineBreaks) {
    result = result.replace(/\n/g, " ");
  }

  // Step 3: remove special characters
  if (options.removeSpecialChars) {
    result = result.replace(/[^a-zA-Z0-9\s]/g, "");
  }

  return result;
}

//key engineerign principles
// 1. PURE FNC ==> same input -->same output
//2.NO UI DEPENDENCY ==> This logic dosent care about react
//3. SCALABLE DESIGN ==> we can add new rules without breaking the old ones
//4. MODULAR THINKING ==> Each featues is independent



//  why this is a production level
// if this logic was inside a React component,
// it would be messy and untestable

// BAD CODE                     GOOD CODE
// logic inside UI              logic in /lib
// hardcoded behavior           configurable options
//hard to test                  resusable function

// beginners writes code that works
// engineers writes code that can evolve

// pause: thats the difference


