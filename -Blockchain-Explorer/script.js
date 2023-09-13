const blockchainData = [
    {
        index: 1,
        timestamp: '2023-09-12 12:00:00',
        hash: '0x97d99bc7729211111a21b12c933c949d4f31684f',
        transactions: [
            {
                id: '001',
                sender: 'Student',
                receiver: 'Faculty',
                amount: 10,
                data: 'Good morning sir, I paid my dues'
            },
            {
                id: '002',
                sender: 'Faculty',
                receiver: 'HOD',
                amount: 5,
                data: 'The student paid his dues'
            }
        ]
    },
    {
        index: 2,
        timestamp: '2023-09-12 12:30:00',
        hash: '0x97d99bc7729211111a21b12c933c949d4f31684f',
        transactions: [
            {
                id: '003',
                sender: 'HOD',
                receiver: 'College Financier',
                amount: 3,
                data: 'All the dues are paid'
            }
        ]
    }
];

const blockList = document.getElementById('block-list');
const transactionList = document.getElementById('transaction-list');
const transactionDetails = document.getElementById('transaction-details');

function renderBlockList() {
    blockList.innerHTML = '';
    blockchainData.forEach((block) => {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block');
        blockElement.innerHTML = `
            <h2>Block #${block.index}</h2>
            <p>Timestamp: ${block.timestamp}</p>
            <p>Hash: ${block.hash}</p>
        `;
        blockElement.addEventListener('click', () => {
            renderTransactionList(block.transactions);
        });
        blockList.appendChild(blockElement);
    });
}

function renderTransactionList(transactions) {
    transactionList.innerHTML = '';
    transactions.forEach((transaction) => {
        const transactionElement = document.createElement('div');
        transactionElement.classList.add('transaction');
        transactionElement.innerHTML = `
            <h3>Transaction ID: ${transaction.id}</h3>
            <p>Sender: ${transaction.sender}</p>
            <p>Receiver: ${transaction.receiver}</p>
            <p>Amount: ${transaction.amount}</p>
            <p>Data: ${transaction.data}</p>
        `;
        transactionElement.addEventListener('click', () => {
            renderTransactionDetails(transaction);
        });
        transactionList.appendChild(transactionElement);
    });
}

function renderTransactionDetails(transaction) {
    transactionDetails.innerHTML = `
        <h3>Transaction ID: ${transaction.id}</h3>
        <p>Sender: ${transaction.sender}</p>
        <p>Receiver: ${transaction.receiver}</p>
        <p>Amount: ${transaction.amount}</p>
        <p>Data: ${transaction.data}</p>
    `;
}

renderBlockList();
