import React, { useEffect, useState } from 'react'
import "../style/Account.css"
import { useNavigate } from 'react-router-dom';


const Account = () => {
    const naviget=useNavigate();
    const [selectedAccount, setSelectedAccount] = useState('');
    const [accounts, setAccount] = useState([]);
    const [ selectAccount, setSelectAccount]=useState({});
    const [loading, setLoading]=useState(false);
    const handleSetAccount = (account)=>{
        localStorage.setItem("user_account_details", JSON.stringify(account));
        naviget("/home");
    }
    useEffect(()=>{
        setLoading(true);
        fetch('https://panorbit.in/api/users.json')
        .then(res=>res.json())
        .then(data=>setAccount(data?.users))
        .catch(err=>console.log(err));
        setLoading(false);
    },[])
  return (
    <div className="account-select-container">
     <div className="centered-container">
        <h5>Select Account</h5>
        <div className="child_container">

            {
                accounts.map(account=>(
                    <div className='list_menu_account' onClick={()=>handleSetAccount(account)}>
                        <img src={account.profilepicture} alt="" />
                        <p>{account.name}</p>
                    </div>
                ))
            }
        </div>
     </div>
    </div>
  )
}

export default Account
