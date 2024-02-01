// content.js
chrome.runtime.sendMessage({ action: 'extractInfo' }, (response) => {
    console.log('Informações extraídas:', response);
    // Aqui podemos manipular as informações extraídas, como enviá-las para a planilha do Google Sheets
  });
  