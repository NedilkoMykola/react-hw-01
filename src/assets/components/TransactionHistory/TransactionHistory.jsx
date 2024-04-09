import Transaction from "../Transaction/Transaction";
import { TBody, THead, Table, Th, Tr } from "./TransactionHistory.styled";


const TransactionHistory = ({items}) => {
    
 return (
        <Table>
  <THead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </THead>

         <TBody>
             {items.map(item => <Transaction key={item.id} item={item} />
             )}
  </TBody>
</Table>
    )
}


export default TransactionHistory;