require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net provide install opera flee tumble'; 
let testAccounts = [
"0x0532f6571b0d5f0843403af0700761a0eed4cd2e84ab7e0fc465693f6eccf0bf",
"0x7879c648f014543e901baad4431e5a538a8498f486c13929ddba722fcaa166cc",
"0x0924897417dc0d565d77f2fd287d126e6f3ab697232b3faf590764f8c309b95b",
"0xd08f86e6eb7bf489a9153fdf15c3ef96176929f23b5b305edfae795ff3bf502b",
"0x4ab5dab92fc9956cb46fd1533db07681dc2ef43a8520146ae4423ce090015dea",
"0x016d9c065097169dd351c4ddf13054896743ca4d5a23407541655d4729c0e414",
"0x1faa57624ea64bf2a2fd7923c561c3b4640d0807ad16e984425d5ca0b2572b6c",
"0x581dd7c8a7e39611eb0060b58e916b755ee645c162c9a0d8cb0c40a898998dff",
"0x3caf6a8b184508729fe47b6b3d3a6ee137641f00615637140803decac8ee5834",
"0x4ecef380e974f9d4f2d8dda28fd9b32646e5a15ba2c29b3d1876ae79d5eaf36d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


