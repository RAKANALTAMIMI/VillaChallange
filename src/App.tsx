import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import './index.css';

import Header from './components/header';
import InvestmentCard from './components/InvestmentCard';
import CategoryDropdown from './components/CategoryDropdown';
import Login from './components/login';

import { filterByCategory } from './utility/mockData';
import { checkToken } from './utility/Auth';

import { toastOptions, TOAST_POSITION } from './config/toast.config';
import { DEFAULT_CATEGORY, type CategoryType } from './utility/categories';

function App() {

  const [token, setToken] = useState<string | null>(sessionStorage.getItem('token'));
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(DEFAULT_CATEGORY);

  const isLoggedIn = token ? checkToken(token).valid : false;
  const filteredInvestments = filterByCategory(selectedCategory);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
    toast.success('Logged out successfully');
  };

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };



  if (!isLoggedIn) {

    return (
      <>
        <Toaster position={TOAST_POSITION} toastOptions={toastOptions} />
        <Login onLogin={(t) => setToken(t)} />
      </>
    );



  }else{

    return (
      <>
        <Toaster position={TOAST_POSITION} toastOptions={toastOptions} />
        <Header onLogout={handleLogout} />

        <CategoryDropdown 
          value={selectedCategory} 
          onChange={handleCategoryChange} 
        />

        <div className="investments-container">

          {filteredInvestments.map((investment, index) => (

            <InvestmentCard
              key={`${selectedCategory}-${index}`}
              name={investment.name}
              description={investment.description}
              returnRate={investment.returnRate}
              rating={investment.rating}
              unitPrice={investment.unitPrice}
              imageUrl={investment.imageUrl}
              category={investment.category}
              history={investment.history}
            />

          ) ) }
        </div>

      </>
    );

  }

}

export default App