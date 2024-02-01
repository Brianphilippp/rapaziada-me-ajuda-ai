// background.js

// Função para enviar informações para a planilha do Google Sheets
async function sendToGoogleSheets(info) {
  try {
    
    // Construir URL da API do Google Sheets
    const spreadsheetId = '1l1Hxy5PsQim1-Zb99SAmE91cVqqxBHKxtbvrrmLyaj0'; // Substitua pelo ID da sua planilha
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:D1:append?valueInputOption=RAW`;
    const apiKey = 'AIzaSyDp3mk8hA5Rg9QerZ0EudMRnP1QuMovftE'; // Substitua pela sua chave de API do Google

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'range': 'Sheet1!A1:D1',
        'majorDimension': 'ROWS',
        'values': [
          [info.name, info.location, info.phone, info.website]
        ]
      })
    };

    // Enviar dados para a planilha do Google Sheets
    const response = await fetch(`${url}?key=${apiKey}`, requestOptions);
    if (!response.ok) {
      throw new Error('Erro ao enviar dados para a planilha.');
    }

    console.log('Informações enviadas para a planilha com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar informações para a planilha:', error.message);
  }
}

// Escutar mensagem vinda do script de conteúdo
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractInfo') {
    // Extrair informações do Google Maps
    console.log('Extraindo informações...');
    // Simulação de extração de informações
    const extractedInfo = {
      name: 'Nome da Empresa',
      location: 'Localização da Empresa',
      phone: 'Telefone da Empresa',
      website: 'Website da Empresa'
    };
    // Enviar informações extraídas para a planilha do Google Sheets
    sendToGoogleSheets(extractedInfo);
    sendResponse(extractedInfo);
  }
});
