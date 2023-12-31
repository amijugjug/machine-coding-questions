
/**
 * 
 * @param {*} text 
 * @returns {function}
 * 
 * This hook take text as input and returns a function that will copy the text we can use this function on 
 * button click. It uses Browser's object modal's (BOM) function clipboard which will copy the text.
 */

export const useCustomCopy = (text) => {
  const copy = async () => {
    if (navigator?.clipboard === false) {
      console.error("Copying text is not allowed.");
      return;
    }

    try {
      await navigator?.clipboard?.writeText(text);
    } catch (error) {
      console.error("Error copying the text.", error);
    }
  };
  return copy;
};
