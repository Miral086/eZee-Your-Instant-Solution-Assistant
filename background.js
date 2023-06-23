chrome.runtime.onInstalled.addListener(() => {
    // Retrieve the API key value
    const apiKey = 'Your_API_Key';
  
    // Store the API key in local storage
    chrome.storage.local.set({ apiKey: apiKey }, () => {
      console.log('API key stored successfully!');
    });
  });
  