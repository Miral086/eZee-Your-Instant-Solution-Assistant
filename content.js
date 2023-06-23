// Function to send a request to the ChatGPT API
console.log("hello");
async function sendChatGPTRequest(instruction) {
  
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  console.log(instruction);
  // Send a request to the ChatGPT API
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 'Your_API_Key' // Replace with your actual API key
    },
    body: JSON.stringify({
      'messages': [
        {
          'role': 'system',
          'content': instruction
        }
      ],
      'model': 'text-davinci-003'
    })
  });
  
  const data = await response.json();
  console.log(data);
  return data.choices[0].message.content;
}

// Store the text before hitting enter or in the line above the cursor after hitting enter
let inputText = '';

// Listen for the Enter key press event globally
document.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    // Get the input text
    console.log("enter");
    const selection = window.getSelection();
    const inputNode = selection.anchorNode.parentElement;

    if (inputNode.tagName === 'INPUT' || inputNode.tagName === 'TEXTAREA') {
      inputText = inputNode.value;
    } else {
      inputText = inputNode.innerText;
    }
    console.log(inputText);
    const commandRegex = /^help:\s*(.*?);?$/;

    if (commandRegex.test(inputText.trim())) {
      console.log("if");
      // Extract the instruction from the input text
      

      try {
        const match = commandRegex.exec(inputText.trim());
        console.log(inputText);
        console.log(commandRegex);
        console.log(match)
        if (match && match[1]) {
          const instruction = match[1].trim();
          console.log(instruction)
          const response = await sendChatGPTRequest(instruction);
          console.log(response);
          // // Replace the command in the document with the response
          inputNode.innerHTML = inputNode.innerHTML.replace(inputText, response);
        } else {
          console.log("Invalid command format");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

    } else {
      console.log('Command not recognized');
    }
  }
});
