export default function convertate(transaction) {
    return  Object.assign(transaction,
        {payment_method: transaction.payment_method.name,project:transaction.project.name});

}


