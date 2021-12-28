const { HttpAgent } = require("@dfinity/agent");
const { Principal } = require("@dfinity/principal");
const { getNFTActor } = require("@psychedelic/dab-js");
const { fetch } = require("cross-fetch");

const IC_HOST = "https://ic0.app/";
const MOTOKO_NFT_CANISTER = "oeee4-qaaaa-aaaak-qaaeq-cai";

const main = async () => {
  var actor = getNFTActor({
    canisterId: MOTOKO_NFT_CANISTER,
    agent: new HttpAgent({ fetch, host: IC_HOST }),
    standard: "EXT",
  });
  console.log(
    await actor.getUserTokens(
      Principal.fromText(
        "xkk3w-nua2o-lmdqd-7yj2n-346o6-n665x-p45qv-yrx6i-pxvoq-w244q-qqe"
      )
    )
  );
};
main();
