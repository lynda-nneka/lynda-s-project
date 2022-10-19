
const { dataStore } = require("./txn");

//Get all transactions
let getAllTransaction =() => dataStore;

//Post A New Transaction
const dataItem = {
    "TimeStamp": "1571967189",
    "TransactionType": "WITHDRAWAL",
    "Amount": "0.493839",
    "Token": "ETH"
}

function newTransaction(data) {
    dataStore.push(data)
}
newTransaction(dataItem)
console.log(dataStore.length)

//UPDATE AN EXISTING TRANSACTION

function update(store, index, amt) {
    store.forEach((i, idx) => {
        if (idx === index) {
          i.Amount = amt
        }
    })
    console.log(store)
}
update(dataStore, 1, 10)


//Get transaction by timestamp

function getTimestamps(array) {
    array.forEach((timestamp) => {
        console.log(timestamp.TimeStamp)
    })
}

getTimestamps(dataStore)

//Get all transactions by withdraw
const trans = []
let allTransactions = dataStore.filter((array) => {
    return array.TransactionType !== "DEPOSIT"
})
allTransactions.forEach(x => trans)





