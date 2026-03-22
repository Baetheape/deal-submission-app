// DocuSign API Configuration

const docusign = require('docusign-esign');

const apiClient = new docusign.ApiClient();

apiClient.setBasePath('https://demo.docusign.net/restapi');
apiClient.addDefaultHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

const accountsApi = new docusign.AccountsApi(apiClient);

module.exports = {
    apiClient, 
    accountsApi
};