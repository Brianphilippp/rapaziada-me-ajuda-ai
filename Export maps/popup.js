// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const extractButton = document.getElementById('extractButton');
    extractButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractInfo' }, (response) => {
          console.log('Informações extraídas:', response);
          // Aqui podemos manipular as informações extraídas, como enviá-las para a planilha do Google Sheets
        });
      });
    });
  });