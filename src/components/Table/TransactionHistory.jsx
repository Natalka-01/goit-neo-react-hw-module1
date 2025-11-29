import RenderTable from "./RenderTable";
import styles from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <RenderTable data={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
