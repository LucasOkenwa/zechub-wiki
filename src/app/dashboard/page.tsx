import Button from '@/components/Button/Button';
import HalvingMeter from '@/components/HalvingMeter';
import dynamic from 'next/dynamic';
const ShieldedPoolChart = dynamic(
  () => import('../../components/ShieldedPoolChart'),
  { ssr: false }
);

async function getData() {
  const response = await fetch(
    'https://api.blockchair.com/zcash/stats'
  );
  const data = await response.json();

  return data.data as BlockchainInfo;
}

interface BlockchainInfo {
  blocks: number;
  transactions: number;
  outputs: number;
  circulation: number;
  blocks_24h: number;
  transactions_24h: number;
  difficulty: number;
  volume_24h: number;
  mempool_transactions: number;
  average_transaction_fee_24h: number;
  largest_transaction_24h: {
    hash: string;
    value_usd: number;
  };
  nodes: number;
  hashrate_24h: string;
  inflation_usd_24h: number;
  average_transaction_fee_usd_24h: number;
  market_price_usd: number;
  market_price_btc: number;
  market_price_usd_change_24h_percentage: number;
  market_cap_usd: number;
  market_dominance_percentage: number;
  next_retarget_time_estimate: string;
  next_difficulty_estimate: number;
  countdowns: any[];
  hodling_addresses: number;
}

export default async function DashboardPage() {
  const blockchainInfo: BlockchainInfo = await getData();
  return (
    <div>
      <h2 className='font-bold mt-8 mb-4'>Shielded Supply (ZEC)</h2>
      <ShieldedPoolChart />
      <HalvingMeter />
      <div className='border-2 border-blue-200 p-4' id='metrics'>
        <h2 className='font-bold my-2'>Metrics</h2>
        <table className='border-collapse  w-full rounded-lg first:tr'>
          <thead>
            <tr className='p-0 lg:p-4 hidden lg:table-row'>
              <th className='lg:border border-blue-300 text-left px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0 bg-blue-100 text-gray-500'>
                Property
              </th>
              <th className='lg:border border-blue-300 text-left px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0 bg-blue-100'>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Blocks
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.blocks.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Transactions
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.transactions.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Outputs
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.outputs.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Circulation
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {(blockchainInfo.circulation / 1e8).toLocaleString()} ZEC
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Blocks (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.blocks_24h.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Transactions (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.transactions_24h.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Difficulty
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.difficulty.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Volume (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {(blockchainInfo.volume_24h / 1e8).toLocaleString()} ZEC
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Mempool Transactions
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.mempool_transactions.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Average Transaction Fee (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.average_transaction_fee_24h.toLocaleString()} sat
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Largest Transaction (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                <a href={`https://3xpl.com/zcash/transaction/${blockchainInfo.largest_transaction_24h.hash}`} className='text-blue-500 underline'>
                  {blockchainInfo.largest_transaction_24h.hash}
                </a>
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Nodes
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.nodes.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Hashrate (24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.hashrate_24h}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Inflation (USD, 24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                ${blockchainInfo.inflation_usd_24h.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Average Transaction Fee (USD, 24h)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                ${blockchainInfo.average_transaction_fee_usd_24h.toFixed(2)}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Market Price (USD)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                ${blockchainInfo.market_price_usd.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Market Price (BTC)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.market_price_btc}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Market Price Change (24h %)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.market_price_usd_change_24h_percentage}%
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Market Cap (USD)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                ${blockchainInfo.market_cap_usd.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Market Dominance (%)
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.market_dominance_percentage.toFixed(2)}%
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Next Retarget Time Estimate
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.next_retarget_time_estimate}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Next Difficulty Estimate
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.next_difficulty_estimate.toLocaleString()}
              </td>
            </tr>
            <tr className='p-0 lg:p-4 flex flex-col lg:table-row'>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-2 lg:py-2 text-sm text-gray-500'>
                Hodling Addresses
              </td>
              <td className='lg:border border-blue-300 px-0 lg:px-2 pt-0 lg:py-2 font-bold break-all text-lg mb-4 lg:mb-0'>
                {blockchainInfo.hodling_addresses.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
