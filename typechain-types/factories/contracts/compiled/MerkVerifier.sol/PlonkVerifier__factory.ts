/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PlonkVerifier,
  PlonkVerifierInterface,
} from "../../../../contracts/compiled/MerkVerifier.sol/PlonkVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
      {
        internalType: "uint256[]",
        name: "pubSignals",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612058806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631e8e1e1314610030575b600080fd5b61004a60048036038101906100459190611e5d565b610060565b6040516100579190611ed8565b60405180910390f35b6000611cdf565b600080600184846000805b821561009c5782840591508482028603905084955080945082820284039050829350809250610072565b60018411156100aa57600080fd5b60008612156100b95788860195505b85965050505050505092915050565b60405181602084028301815160208301925060005b82841015610120578185527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018451830991506020850194506020840193506100dd565b61014a7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183610067565b91506020850394506020840393508592505b828411156101c6577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018551830990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184518309915080845260208503945060208403935061015c565b81845250505050505050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610203576000805260206000f35b50565b61032081511461021a576000805260206000f35b6102286102608201516101d2565b6102366102808201516101d2565b6102446102a08201516101d2565b6102526102c08201516101d2565b6102606102e08201516101d2565b61026e6103008201516101d2565b61027c6103208201516101d2565b50565b60008060208501516103008501526040850151610320850152606085015161034085015260208301516103608501526020800183015161038085015260406020018301516103a085015260606020018301516103c085015260806020018301516103e085015260a06020018301516104008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016101206103008601200690508060208501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020808601200660408501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001604060e08501200660008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c06101208501200691508160608501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182820960a08501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991508160808501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180600184030106915081610260850152816102808501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160e0610260850120068060c08601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820992508260e08601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101008601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101208601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101408601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101608601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160806101e086012006610180860152505050505050565b60017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001836060860151030106614000096102a08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e85820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001836060860151030106614000096102c08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e85820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001836060860151030106614000096102e0830152610915600461028084016100c8565b610260820151600191507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816102a0850151096102a08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e85830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826102c08601510983096102c08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e85830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826102e08601510983096102e0840152505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102a0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102c0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160608601516102e086015109830301069050806101a0830152505050565b60008060007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016101a08601516103208601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102c08601510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102e08601510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102a08601510890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610300850151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001827f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018501030692507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161028086015184099250826101c08601525050505050565b81518152602082015160208201525050565b6040518151815260208201516020820152825160408201526020830151606082015260408260808360066107d05a03fa80610eaf576000805260206000f35b50505050565b6000604051835181526020840151602082015284604082015260408160608360076107d05a03fa915081610eed576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610f1d576000805260206000f35b5050505050565b600060405183815284602082015285604082015260408160608360076107d05a03fa915081610f57576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610f87576000805260206000f35b505050505050565b600060405183815284602082015285604082015260408360608360076107d05a03fa915081610fc2576000805260206000f35b505050505050565b6101e08201610fdd6101e0830182610e5e565b610ff1610180840151610220840183610eb5565b505050565b60008061022084017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151610260860151099250611079837f08e7148582fc5908328833cdb02847ce21add2097827d78ebb134643be13ae1c7f1ba7a55c783be340b4fc0c76e3c954219338aa301299a3a36594c7521040800c84610f8f565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151840992506110f0837f14481ad5203e2d179622191f3ff1e6e0744a2c2b555b029ac471387baefe57417f251d9b61a17f8264c4bc182899c223a7a6da8352e3c45b925552fba4bf352f8184610f24565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c086015161028086015109925061116b837f0d73207faebb26200097675e0e4f81ddbfca30c8140eaa3677fc3da4aee465d17f0cd67c43eff2099c624d1081b9cee2aeee492652fb4510f89dba8c3e2dde944484610f24565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c08601516102a08601510992506111e6837f1865a22c95cef5bf6f0a45b04f426e8c16689f735b505b2697eaf963df7723da7f0b7ad6f076b249ff5e26d95738dc4b687a1a1193b61e2b5696fd8ed12b8ce7d184610f24565b60c08501519250611239837f2d2205adddd6572016ea369fb6a0e336074eb98629cbaace356e70d5754d5e0e7f2e9ed299da9a62d316d51ac50a916047713c5f9cc3dbd5dc11f78c8e47edcd1984610f24565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a08601516102608601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160020991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160030991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102a0850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610180860151840892506115148360e0860183610eb5565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102c085015160208701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102e085015160208701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610300850151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001837f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000010306925061177e837f1949991050a1c5c382b7ee1c66529fb325842c4a75800b761d6b9a325ede1c527f233b414e9ec21213e03a40dc727d9f70392c6661c200adf575b1f9a53cea75be84610f24565b61178c610120850182610e70565b608085015192506117a283610160860183610eb5565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183840992506117d7836101a0860183610eb5565b6117e960e08601516020860183610eb5565b6117fc6101008601516060860183610eb5565b61180f61012086015160a0860183610eb5565b6118606101408601517f2a864d83e02c578d3ac3d8a4a65efe4d1261f6b4be2a3420429f6d15e26671f57f1a36a549050b74e1b520844c8bb2c6c2eb7a56885cc09594dd0162b397aee59f84610f24565b6118b16101608601517f219efb709b09870a9dc12e375555810c3a21af45fa10ce046448036acef23ce77f2d8ac091c2ad75fb633928d5695f95049a0b0b34c16132fd9cffcecf970751f784610f24565b6101c085015192507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060c087015161032087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060e087015161026087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018061010087015161028087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101208701516102a087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101408701516102c087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101608701516102e087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018061018087015161030087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001837f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000103069250611a71836002600184610f24565b60608501519250611a87836101e0860183610eb5565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160608601516101808701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f2d965651cdd9e4811f4e51b80ddca8a8b4a93ee17420aae6adaa01c2617c6e8584099250611b0b83610220860183610eb5565b5050505050565b60006040516101e0830151815260206101e08401015160208201527f26186a2d65ee4d2f9c9a5b91f86597d35f192cd120caf7e935d8443d1938e23d60408201527f30441fd1b5d3370482c42152a8899027716989a6996c2535bc9f7fee8aaef79e60608201527f1970ea81dd6992adfbc571effb03503adbbb6a857f578403c6c40e22d65b3c0260808201527f054793348f12c0cf5622c340573cb277586319de359ab9389778f689786b1e4860a082015261022083015160c08201526020610220840101517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47817f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47030690508060e08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101008301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101208301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6101408301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6101608301526020826101808460086107d05a03fa825181169350505050919050565b6040516103008101604052611cf384610206565b611cfe83828661027f565b611d0781610776565b611d118382610a43565b611d1b8185610b50565b611d258185610fca565b611d2f8185610ff6565b611d3881611b12565b61030082036040528060005260206000f35b6000611d5d611d5884611f18565b611ef3565b90508083825260208201905082856020860282011115611d7c57600080fd5b60005b85811015611dac5781611d928882611e48565b845260208401935060208301925050600181019050611d7f565b5050509392505050565b6000611dc9611dc484611f44565b611ef3565b905082815260208101848484011115611de157600080fd5b611dec848285611f8b565b509392505050565b600082601f830112611e0557600080fd5b8135611e15848260208601611d4a565b91505092915050565b600082601f830112611e2f57600080fd5b8135611e3f848260208601611db6565b91505092915050565b600081359050611e578161200b565b92915050565b60008060408385031215611e7057600080fd5b600083013567ffffffffffffffff811115611e8a57600080fd5b611e9685828601611e1e565b925050602083013567ffffffffffffffff811115611eb357600080fd5b611ebf85828601611df4565b9150509250929050565b611ed281611f75565b82525050565b6000602082019050611eed6000830184611ec9565b92915050565b6000611efd611f0e565b9050611f098282611f9a565b919050565b6000604051905090565b600067ffffffffffffffff821115611f3357611f32611fcb565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611f5f57611f5e611fcb565b5b611f6882611ffa565b9050602081019050919050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b611fa382611ffa565b810181811067ffffffffffffffff82111715611fc257611fc1611fcb565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61201481611f81565b811461201f57600080fd5b5056fea2646970667358221220fb1d4cea07be4ce2ba76e799754e539ae859c228f2b8be2c48f2cce53b65a23d64736f6c63430008010033";

type PlonkVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlonkVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlonkVerifier__factory extends ContractFactory {
  constructor(...args: PlonkVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PlonkVerifier> {
    return super.deploy(overrides || {}) as Promise<PlonkVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PlonkVerifier {
    return super.attach(address) as PlonkVerifier;
  }
  override connect(signer: Signer): PlonkVerifier__factory {
    return super.connect(signer) as PlonkVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlonkVerifierInterface {
    return new utils.Interface(_abi) as PlonkVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlonkVerifier {
    return new Contract(address, _abi, signerOrProvider) as PlonkVerifier;
  }
}