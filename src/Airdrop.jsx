//component in react , are very similar to creating your own HTML tag

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
//The useWallet hook Provides the wallet variable inside the Airdrop component.
//because I wrapped the airdrop component inside the walletprovider.
export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  // efine the function inside the omponent body.
  async function sendAirdropToUser() {
    let amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 10000000000);
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }
  return (
    <div>
      Hi from AirDrop faucet!! <br></br>
      {/* Hi Mr {wallet.publicKey.toString()} */}
      <input id="publicKey" type="text" placeholder="Amount" />
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
}
