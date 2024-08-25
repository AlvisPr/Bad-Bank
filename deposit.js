function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field) {
        if (!field || isNaN(field) || Number(field) <= 0) {
            setStatus('Error: Enter a valid positive number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleDeposit() {
        if (!validate(amount)) return;
        
        const currentUser = ctx.users.find(user => user.email === ctx.currentUser.email);
        if (currentUser) {
            currentUser.balance += Number(amount);
            ctx.currentUser.balance = currentUser.balance;
            setShow(false);
            setStatus(`Deposit of ${amount} successful. New balance: ${currentUser.balance}`);
        } else {
            setStatus('Error: User not found');
        }
    }

    function clearForm() {
        setAmount('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="success"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                <h5>Current Balance: ${ctx.currentUser ? ctx.currentUser.balance : 'N/A'}</h5>
                Amount<br/>
                <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                <h6>New Balance: ${ctx.currentUser ? ctx.currentUser.balance : 'N/A'}</h6>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
            )}
        />
    )
}