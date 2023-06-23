# eZee - Your Instant Solution Assistant <img src="https://github.com/Miral086/eZee-Your-Instant-Solution-Assistant/blob/main/icon48.png" alt="drawing" width="100"/

>

eZee is a time-saving Chrome extension that integrates with the ChatGPT API, allowing you to quickly access solutions without the hassle of manually copying and pasting. With eZee, you can effortlessly retrieve answers and information from ChatGPT by simply using a help command.

Please note that the integration with the ChatGPT API requires a paid model from OpenAI. If you don't have a paid version, you won't be able to generate the output for instructions.

## Usage Instructions
1. Download the ZIP file of the eZee Chrome extension code.

2. Replace the API key placeholder in the code with your valid ChatGPT API key. You can obtain an API key from the OpenAI website.

3. Open the Chrome browser and navigate to chrome://extensions.

4. Enable the "Developer mode" toggle in the top-right corner of the page.

5. Click on the "Load unpacked" button and select the folder containing the extracted ChatHelper extension code.

6. The eZee extension should appear in the list of installed extensions. Ensure that the toggle next to it is enabled.

7. To test if the extension is working correctly, visit any website (e.g., a linked post, an email, or anything) where you can input text.

8. Type the help command in the input field where you want to retrieve a solution. The help command format is as follows:

 `help: instructions;`

10. Replace instructions with your specific question or problem that you need assistance with.

11. After typing the help command, press Enter. eZee will communicate with the ChatGPT API using your configured API key.

12. If the extension is working correctly and you have provided correct command, it will automatically replace the help command with the solution obtained from ChatGPT. 

## Debugging
* If you encounter any issues or want to debug the extension, you can use the following steps:

* Open the webpage where you're testing the extension.

* Right-click on the webpage and select "Inspect" or "Inspect Element" from the context menu. This will open the Chrome Developer Tools.

* Navigate to the "Console" tab in the Developer Tools.

* Look for any console.log() statements within the eZee extension code. These statements may provide useful information for debugging purposes.

### Please note that publishing the extension requires following the Chrome Web Store guidelines and procedures. Refer to the official Chrome Web Store documentation for detailed instructions on how to publish a Chrome extension.

