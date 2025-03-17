import React from "react";

const TrendingKeywords = () => {
    const keywords = [
      { label: '#Produit1', count: 133 },
      { label: '#Produit2', count: 120 },
      { label: '#Produit3', count: 110 },
    ];
  
    const tags = ['#Produit1', '#Produit2', '#Produit3'];
  
    return (
      <div className="h-full bg-gray-100 ml-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Mot clé tendance</h3>
          <select className="border rounded px-3 py-1">
            <option>Mensuel</option>
          </select>
        </div>
  
        <div className="space-y-4">
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-sm font-medium">{keyword.label}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FFD700] h-2 rounded-full"
                  style={{ width: `${(keyword.count / 133) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{keyword.count} fois</span>
            </div>
          ))}
        </div>
  
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Mot clé tendance</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-foreground text-[#FFD700] px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default TrendingKeywords;