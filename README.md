O arquivo find.ts recebe um input no qual validará os maior número de inteiro consecutivos e irá imprimi-lo.
Para executar o arquivo find.ts 
- `node find.ts`


O arquivo sudoku.ts receber o board do sudoku e retornará "sudoku is valid!" ou "sudoku is not valid!"
Para executar o arquivo sudoku.ts
- `node sudoku.ts`

Foi criado um projeto C# na pasta C#:
1. `dotnet new console`
2. `dotnet run Program.cs`

Questions:

Algoritmo em C#
Problema:
Escreva uma função em C# chamada FindLongestConsecutiveSubsequence que, dado um array de inteiros, encontre a sequência consecutiva mais longa e retorne a sequência como um array.
Exemplos de Entrada e Saída Esperada:

    Entrada: [100, 4, 200, 1, 3, 2]
    Saída Esperada: [1, 2, 3, 4] ou [4, 3, 2, 1]
    Entrada: [10, 5, 12, 6, 15, 7, 8, 14, 9]
    Saída Esperada: [5, 6, 7, 8, 9, 10] ou [10, 9, 8, 7, 6, 5]


Assinatura da Função:
int[] FindLongestConsecutiveSubsequence(int[] numbers)
--

Algoritmo em JavaScript
Problema:
Implemente uma função JavaScript chamada isValidSudoku que, dada uma grade 9x9 representando um tabuleiro de Sudoku, retorne true se o tabuleiro for válido, caso contrário, retorne false.
Regras para o tabuleiro válido:

    Cada linha deve conter os números de 1 a 9 sem repetições.
    Cada coluna deve conter os números de 1 a 9 sem repetições.
    Cada um dos nove subquadrados 3x3 deve conter os números de 1 a 9 sem repetições.

Assinatura da Função:
function isValidSudoku(board) 
Exemplo de Uso e Saída:

let board = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board));
// Saída: true

--
Consulta SQL
Problema: search.sql
Você possui duas tabelas:

    accounts: Informações sobre contas bancárias.
        account_id (INTEGER, chave primária)
        account_name (VARCHAR)
        account_type (VARCHAR)
    transactions: Informações sobre transações financeiras.
        transaction_id (INTEGER, chave primária)
        account_id (INTEGER, chave estrangeira)
        amount (DECIMAL)
        type (VARCHAR) - 'credit' ou 'debit'
        transaction_date (DATE)

Exemplo de Estrutura das Tabelas:

CREATE TABLE accounts (
    account_id INTEGER PRIMARY KEY,
    account_name VARCHAR(100),
    account_type VARCHAR(50)
);
CREATE TABLE transactions (
    transaction_id INTEGER PRIMARY KEY,
    account_id INTEGER REFERENCES accounts(account_id),
    amount DECIMAL,
    type VARCHAR(10),
    transaction_date DATE
);
INSERT INTO accounts (account_id, account_name, account_type) VALUES
(1, 'John Doe', 'Checking'),
(2, 'Jane Smith', 'Savings'),
(3, 'Alice Johnson', 'Checking');
INSERT INTO transactions (transaction_id, account_id, amount, type, transaction_date) VALUES
(1, 1, 1000, 'credit', '2024-05-01'),
(2, 1, 500, 'debit', '2024-05-02'),
(3, 1, 200, 'credit', '2024-05-03'),
(4, 2, 1500, 'credit', '2024-05-01'),
(5, 2, 300, 'debit', '2024-05-02'),
(6, 3, 800, 'credit', '2024-05-03'),
(7, 3, 400, 'debit', '2024-05-03');

Problema a Ser Resolvido:
Escreva uma consulta SQL que retorne os saldos diários de cada conta para os últimos 7 dias, considerando que:

    'credit' deve aumentar o saldo.
    'debit' deve reduzir o saldo.

A consulta deve retornar os seguintes campos:

    account_name (nome da conta)
    account_type (tipo da conta)
    transaction_date (data do saldo diário)
    daily_balance (saldo diário)

Exemplo de Saída Esperada:
account_name | account_type | transaction_date | daily_balance
John Doe     | Checking | 2024-05-01 | 1000
John Doe     | Checking | 2024-05-02 | 500
John Doe     | Checking | 2024-05-03 | 700
Jane Smith   | Savings | 2024-05-01 | 1500
Jane Smith   | Savings | 2024-05-02 | 1200
Alice Johnson| Checking | 2024-05-03 | 400
