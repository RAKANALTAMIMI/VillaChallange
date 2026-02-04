import './InvestmentCard.css';
import {getRiskColorAndLabel, getCategoryColor} from '../utility/categories' 
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

type InvestmentCardProps = {
  name: string;
  description: string;
  returnRate: number;
  rating: number;
  unitPrice: number;
  imageUrl: string;
  category: string;
  history: { year: string; price: number }[];
};





const InvestmentCard = ({
  name,
  description,
  returnRate,
  rating,
  unitPrice,
  imageUrl,
  category,
  history,
}: InvestmentCardProps) => {

  const [isExpanded, setIsModalOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investmentYears, setInvestmentYears] = useState('1');
  const [projectedReturn, setProjectedReturn] = useState<number | null>(null);

  const { color, label } = getRiskColorAndLabel(rating);

  const calculateReturn = (amount: string, years: string) => {
    if (!amount || !years) {
      setProjectedReturn(null);
      return;
    }
    
    const parsedAmount = parseFloat(amount);
    const parsedYears = parseFloat(years);
    
    if (isNaN(parsedAmount) || isNaN(parsedYears)) {
      setProjectedReturn(null);
      return;
    }

    if (parsedAmount < 0) {
      toast.error('Amount cannot be negative');
      return;
    }

    const rate = returnRate / 100;
    const futureValue = parsedAmount * Math.pow(1 + rate, parsedYears);
    
    setProjectedReturn(futureValue);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
    toast(`Viewing ${name}`, { icon: '📊' });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setInvestmentAmount(amount);
    calculateReturn(amount, investmentYears);
  };

  const handleYearsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const years = e.target.value;
    setInvestmentYears(years);
    calculateReturn(investmentAmount, years);
  };

  const categoryColor = getCategoryColor(category);

  return (
    <>

      <div className="investment-card" onClick={handleCardClick}>
        <div className="card-info">
          <div className="card-image">
            <img src={imageUrl} alt={name} />
            <span className="category-label" style={{ backgroundColor: categoryColor }}>{category}</span>
          </div>

          <p className="card-name">{name}</p>
          <p className="card-description">{description}</p>

          <div className="card-stats-container">
            <div className="card-stats">
              <p className="card-return">
                <strong>Return Rate</strong>
                <br/> <strong style={{ color: '#4963e9' }}> %{returnRate} </strong>
              </p>
            </div>

            <div className="vertical-divider"></div>

            <div className="card-stats">
              <p className="card-unit">
                <strong>Unit Price</strong>
                <br/> <strong style={{ color: '#13c388' }}> {unitPrice} </strong>
              </p>
            </div>

            <div className="vertical-divider"></div>

            <div className="card-stats">
              <p className="card-risk">
                <strong>Risk Level</strong>
                <br/> <strong style={{ color }}> {label} </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (

        <div className="expanded-overlay" onClick={() => setIsModalOpen(false)}>

          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <label>📉 Price History</label>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={history} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    dot={{ fill: '#6366f1', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Unit Price ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <label>🧮 Investment Calculator</label>
            <div className='calculator-container'> 
              <div className="calc-input-group">
                <label>Investment Amount ($)</label>
                <input 
                  type="number" 
                  value={investmentAmount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="calc-input-group">
                <label>Years</label>
                <select 
                  value={investmentYears}
                  onChange={handleYearsChange}
                  className="calc-select"
                >
                  {[1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map(year => (
                    <option key={year} value={year}>{year} Year{year > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="calc-result">
                {investmentAmount ? (
                  <p>Projected Return: <strong style={{ color: '#10b981' }}>
                    ${projectedReturn?.toFixed(2) || '0.00'}
                  </strong></p>
                ) : (
                  <p style={{ color: '#94a3b8' }}>Enter an amount to see projection</p>
                )}
              </div>
            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default InvestmentCard;