//change this contract address to the one you have created!
var contractAddress = '0x4aff3e4ee940e499e2d83f7f38ca982e1c770aab';

function createTransaction() {
	var receiverAddress = '0x' + document.querySelector('#receiverAddress').value;
	var amount = document.querySelector('#amount').value;
	var data = [receiverAddress, amount];
	web3.eth.transact({to: contractAddress, data: data, gas: 5000});
}

web3.eth.watch({altered: {at: web3.eth.accounts[0], id: contractAddress}}).changed(function() {
	document.getElementById('balance').innerText = web3.toDecimal(web3.eth.stateAt(contractAddress, web3.eth.accounts[0]));
});