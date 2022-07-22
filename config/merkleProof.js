import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import whiteList from './whiteList.json'

const leafNodes = whiteList.map(address => keccak256(address))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

export const merkleRoot = merkleTree.getHexRoot()
console.log('merkleRoot', merkleRoot)

// get leafnode and parents node
export function checkInWhiteList(address) {
  const keccakAddress = keccak256(address)
  return merkleTree.verify(getHexProof(keccakAddress), keccakAddress, merkleRoot)
}

export function getHexProof(address) {
  return merkleTree.getHexProof(address)
}
