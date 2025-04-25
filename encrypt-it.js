/*
 * Starter file for Encrypt-It Assignment
 * Author: Alexei Godfray
 * Date: 4/25/2025
 *
 * This script handles the user interactions for the Encrypt-It webpage,
 * allowing users to input text, encrypt it using a shift cipher, and
 * reset the interface.
 */
(function() {
  "use strict";

  /**
   * Initializes the application by setting up event listeners for UI elements
   * once the HTML DOM is fully loaded.
   */
  function init() {
    // Part I: Log message on window load
    console.log("Window loaded!");

    // Set up listener for the Encrypt button
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncryptClick); // Changed from handleClick

    // Set up listener for the Reset button
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles the click event for the "Encrypt-It!" button.
   * Retrieves text from the input area, encrypts it using the shift cipher,
   * and displays the result.
   */
  function handleEncryptClick() {
    // Part II: Log message on button click (can be commented out later)
    console.log("Encrypt button clicked!");

    // Part IV: Implement encryption
    let inputTextElement = document.getElementById("input-text");
    let resultParagraph = document.getElementById("result");

    let originalText = inputTextElement.value;
    let encryptedText = shiftCipher(originalText); // Use the shiftCipher function

    resultParagraph.textContent = encryptedText; // Display the result
  }

  /**
   * Handles the click event for the "Reset" button.
   * Clears the input text area and the result display area.
   */
  function handleReset() {
    console.log("Reset button clicked!"); // Optional console log for testing

    let inputTextElement = document.getElementById("input-text");
    let resultParagraph = document.getElementById("result");

    inputTextElement.value = ""; // Clear the textarea
    resultParagraph.textContent = ""; // Clear the result paragraph
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   * Non-alphabetic characters are returned unchanged. Case is ignored (output is lowercase).
   * @param {string} text - The text to encrypt.
   * @returns {string} The encrypted text.
   */
  function shiftCipher(text) {
    text = text.toLowerCase(); // Convert input to lowercase for consistent processing
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i]; // Get current character

      // Check if it's a lowercase letter
      if (char >= 'a' && char <= 'z') {
        if (char === 'z') {
          // If it's 'z', wrap around to 'a'
          result += 'a';
        } else {
          // Otherwise, shift to the next letter
          let letterCode = text.charCodeAt(i);
          let resultLetter = String.fromCharCode(letterCode + 1);
          result += resultLetter;
        }
      } else {
        // If it's not a lowercase letter, keep it as is
        result += char;
      }
    }
    return result;
  }

  // Add the event listener for the window load event to start the init function
  window.addEventListener("load", init);

})(); // End of IIFE