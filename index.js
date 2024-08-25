



function Spa(){
    const [currentUser, setCurrentUser] = React.useState(null);

    return(
        <HashRouter>
            <NavBar />
            <UserContext.Provider value={{
                users: [{name:"Abdul", email:"abdul@mit.edu", password:"secret", balance:100}],
                currentUser: currentUser,
                setCurrentUser: setCurrentUser
            }}>
                <Route path="/" exact component={Home}/>
                <Route path="/CreateAccount" component={CreateAccount}/>
                <Route path="/login" component={Login}/>
                <Route path="/deposit" component={Deposit}/>
                <Route path="/withdraw" component={Withdraw}/>
                <Route path="/balance" component={Balance}/>
                <Route path="/alldata" component={AllData}/>   
            </UserContext.Provider> 
        </HashRouter> 
    ); 
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa />);
