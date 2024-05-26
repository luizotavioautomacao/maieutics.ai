WITH daily_transactions AS (
    SELECT
        a.account_name,
        a.account_type,
        t.transaction_date,
        SUM(CASE WHEN t.type = 'credit' THEN t.amount ELSE -t.amount END) AS daily_balance
    FROM
        accounts a
    JOIN
        transactions t ON a.account_id = t.account_id
    WHERE
        t.transaction_date BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY) AND CURRENT_DATE()
    GROUP BY
        a.account_id,
        t.transaction_date
),
balance AS (
    SELECT
        account_name,
        account_type,
        transaction_date,
        SUM(daily_balance) OVER (PARTITION BY account_name ORDER BY transaction_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS daily_balance
    FROM
        daily_transactions
)
SELECT
    account_name,
    account_type,
    transaction_date,
    daily_balance
FROM
    balance
ORDER BY
    account_name,
    transaction_date;
