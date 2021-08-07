require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note meadow unusual install clip olympic slice'; 
let testAccounts = [
"0x0bd590f1dfe78efc8cd03487c75fb0a563f1b75eafc0ed3c7ac6618d36133738",
"0xf5ee1bed1b20f4d89185679f6d57e8edd5926d53a87d77792363ee9df423efb1",
"0x985f0b13bb4b923ca006be72c997bfa98edfe76adabab5e06ad32cfebd61a45c",
"0x74e7a38f903cb194c8a5d0e19405f97a401437e7d61f772c7d7241608325df6a",
"0x130e0ac6f45c36c22e9a54d51d31061bd0fffadf145df9946c1256a838f7110f",
"0x78f462ee8af04fa9b7481358fca2bdc066e04f3d7de3006224fb5ba52cdf1749",
"0xb041743045909d011158183caed272d52f7e4b0a5c1498555f250e3a0f6119f8",
"0x740466f10a5a857a67d3c5f71c282aa0aab796fbfbce619be44c18fef3b89bf0",
"0x04f09b7f42651b0c8b28691f99ced47dc9211e9f771df583196dad031303813f",
"0xc832e39a0e1288b02075b22c77853f2302812360c5192d85c5c1ccb54f8f02dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

