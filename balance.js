function Balance() {
    const ctx = React.useContext(UserContext);
    const currentUser = ctx.currentUser;

    return (
        <Card
            bgcolor="info"
            header="Balance"
            body={
                currentUser ? (
                    <>
                    <h2>Account Balance</h2>
                    <h3>Welcome, {currentUser.name}</h3>
                    <h4>Your current balance is: ${currentUser.balance}</h4>
                    <p>Email: {currentUser.email}</p>
                    </>
                ) : (
                    <h3>Please log in to view your balance</h3>
                )
            }
        />
    )
}