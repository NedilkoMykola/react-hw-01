import { Td, Tr } from "./Transaction.styled";



const Transaction = ({ item }) => {
    
    const { type, amount, currency } = item;
    return (
        <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
    )
}

export default Transaction;