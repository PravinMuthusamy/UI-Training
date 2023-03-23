const createBank = () => {
    const accounts = [
      {
        accountNo: '01',
        cardNo: '1111 2222 3333 4444',
        pin: '1234',
        balance: 10000
      },
      {
        accountNo: '02',
        cardNo: '5555 6666 7777 8888',
        pin: '5678',
        balance: 5000
      },
      {
        accountNo: '03',
        cardNo: '9999 0000 1111 2222',
        pin: '9012',
        balance: 5000
      },
      {
        accountNo: '04',
        cardNo: '3333 4444 5555 6666',
        pin: '3456',
        balance: 5000
      },
      {
        accountNo: '05',
        cardNo: '7777 8888 9999 0000',
        pin: '7890',
        balance: 5000
      },
    ];
  
    const withdraw = (cardNo, pin, amount) => {
      const account = accounts.find((acc) => acc.cardNo === cardNo && acc.pin === pin);
      if (!account) {
        console.log('Invalid card number or PIN');
        return;
      }
  
      else if (amount > account.balance) {
        console.log('Insufficient balance');
        return;
      }
  
      account.balance -= amount;
      console.log(`Withdrawn ${amount}. Current balance: ${account.balance}`);
    };
  
    const deposit = (cardNo, pin, amount) => {
      const account = accounts.find((acc) => acc.cardNo === cardNo && acc.pin === pin);
      if (!account) {
        console.log('Invalid card number or PIN');
        return;
      }
  
      account.balance += amount;
      console.log(`Deposited ${amount}. Current balance: ${account.balance}`);
    };
  
    return {
      withdraw,deposit
    };
  };
  
  const bank = createBank();
  
 
  bank.withdraw('1111 2222 3333 4444', '1234', 5000); 
//   bank.deposit('1111 2222 3333 4444', '1234', 2000); 
