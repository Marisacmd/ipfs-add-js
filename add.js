const IPFS = require('ipfs-core');
const fs = require('fs');
var file = fs.readFileSync('text.txt', 'utf8');

async function addFileToIPFS(file) {
    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add(file);
    console.info(cid);
    await ipfs.stop();
    process.exit(); //node.stop() doesn't work, but need other way
}

addFileToIPFS(file);
