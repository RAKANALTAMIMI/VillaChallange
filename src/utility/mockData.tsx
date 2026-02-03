const investments = [
{
    name: "Tech Growth Fund",
    description: "High-growth technology companies, from around the world.",
    returnRate: 12,
    rating: 1,
    unitPrice: 50,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Stocks',
    history: [
    { year: '2020', price: 35 },
    { year: '2021', price: 42 },
    { year: '2022', price: 48 },
    { year: '2023', price: 58 },
    { year: '2024', price: 75 },
    ]
},
{
    name: "Bond Portfolio",
    description: "Stable fixed-income investments with consistent returns and lower volatility.",
    returnRate: 5,
    rating: 1,
    unitPrice: 100,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Commodities',
    history: [
    { year: '2020', price: 95 },
    { year: '2021', price: 97 },
    { year: '2022', price: 98 },
    { year: '2023', price: 99 },
    { year: '2024', price: 100 },
    ]
},
{
    name: "Crypto Index Fund",
    description: "Diversified cryptocurrency portfolio with exposure to major digital assets.",
    returnRate: 25,
    rating: 3,
    unitPrice: 40,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Crypto',
    history: [
    { year: '2020', price: 10 },
    { year: '2021', price: 25 },
    { year: '2022', price: 18 },
    { year: '2023', price: 35 },
    { year: '2024', price: 40 },
    ]
},
{
    name: "Real Estate ETF",
    description: "Diversified real estate portfolio with stable income and capital appreciation.",
    returnRate: 10,
    rating: 2,
    unitPrice: 85,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'REITs',
    history: [
    { year: '2020', price: 65 },
    { year: '2021', price: 70 },
    { year: '2022', price: 75 },
    { year: '2023', price: 80 },
    { year: '2024', price: 85 },
    ]
},
{
    name: "Commodity Index",
    description: "Diversified commodities including gold, oil, and agricultural products.",
    returnRate: 8,
    rating: 2,
    unitPrice: 60,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Commodities',
    history: [
    { year: '2020', price: 45 },
    { year: '2021', price: 50 },
    { year: '2022', price: 55 },
    { year: '2023', price: 58 },
    { year: '2024', price: 60 },
    ]
},
{
    name: "Global Tech Leaders",
    description: "Investments in leading tech companies driving innovation worldwide.",
    returnRate: 15,
    rating: 2,
    unitPrice: 65,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Stocks',
    history: [
    { year: '2020', price: 40 },
    { year: '2021', price: 48 },
    { year: '2022', price: 52 },
    { year: '2023', price: 60 },
    { year: '2024', price: 65 },
    ]
},
{
    name: "Corporate Bonds Plus",
    description: "High-grade corporate bonds with enhanced yield opportunities.",
    returnRate: 6,
    rating: 1,
    unitPrice: 105,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Commodities',
    history: [
    { year: '2020', price: 98 },
    { year: '2021', price: 100 },
    { year: '2022', price: 101 },
    { year: '2023', price: 103 },
    { year: '2024', price: 105 },
    ]
},
{
    name: "DeFi Token Fund",
    description: "Next-generation decentralized finance opportunities with growth potential.",
    returnRate: 30,
    rating: 3,
    unitPrice: 55,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Crypto',
    history: [
    { year: '2020', price: 5 },
    { year: '2021', price: 20 },
    { year: '2022', price: 15 },
    { year: '2023', price: 40 },
    { year: '2024', price: 55 },
    ]
},
{
    name: "Commercial Properties",
    description: "Premium commercial real estate with strong tenant base and cash flow.",
    returnRate: 11,
    rating: 2,
    unitPrice: 95,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Crypto',
    history: [
    { year: '2020', price: 72 },
    { year: '2021', price: 78 },
    { year: '2022', price: 82 },
    { year: '2023', price: 88 },
    { year: '2024', price: 95 },
    ]
},
{
    name: "Agricultural Futures",
    description: "Commodity exposure through agricultural products and resources.",
    returnRate: 9,
    rating: 2,
    unitPrice: 55,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Commodities',
    history: [
    { year: '2020', price: 40 },
    { year: '2021', price: 45 },
    { year: '2022', price: 50 },
    { year: '2023', price: 53 },
    { year: '2024', price: 55 },
    ]
},
{
    name: "Healthcare & Pharma",
    description: "Investments in healthcare providers and pharmaceutical innovation companies.",
    returnRate: 13,
    rating: 1,
    unitPrice: 78,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Stocks',
    history: [
    { year: '2020', price: 55 },
    { year: '2021', price: 62 },
    { year: '2022', price: 68 },
    { year: '2023', price: 73 },
    { year: '2024', price: 78 },
    ]
},
{
    name: "Government Securities",
    description: "Safe government bonds with guaranteed returns and capital protection.",
    returnRate: 4,
    rating: 1,
    unitPrice: 110,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Bonds',
    history: [
    { year: '2020', price: 105 },
    { year: '2021', price: 106 },
    { year: '2022', price: 107 },
    { year: '2023', price: 108 },
    { year: '2024', price: 110 },
    ]
},
{
    name: "Blockchain Innovation",
    description: "Emerging blockchain technology companies and blockchain infrastructure plays.",
    returnRate: 28,
    rating: 3,
    unitPrice: 48,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Crypto',
    history: [
    { year: '2020', price: 8 },
    { year: '2021', price: 22 },
    { year: '2022', price: 16 },
    { year: '2023', price: 38 },
    { year: '2024', price: 48 },
    ]
},
{
    name: "Residential Real Estate",
    description: "Portfolio of residential properties with long-term appreciation potential.",
    returnRate: 9,
    rating: 2,
    unitPrice: 80,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'REITs',
    history: [
    { year: '2020', price: 62 },
    { year: '2021', price: 68 },
    { year: '2022', price: 72 },
    { year: '2023', price: 77 },
    { year: '2024', price: 80 },
    ]
},
{
    name: "Precious Metals",
    description: "Gold, silver, and precious metals for portfolio diversification and hedging.",
    returnRate: 7,
    rating: 2,
    unitPrice: 70,
    imageUrl: "https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_f862b355-b993-459d-9c43-40f64d0a4064_Large",
    category: 'Commodities',
    history: [
    { year: '2020', price: 52 },
    { year: '2021', price: 58 },
    { year: '2022', price: 62 },
    { year: '2023', price: 66 },
    { year: '2024', price: 70 },
    ]
}
];

function filterByCategory(category: string) {
  if (category === 'All') {
    return investments;
  }
  return investments.filter(card => card.category === category);
}

export { investments, filterByCategory };