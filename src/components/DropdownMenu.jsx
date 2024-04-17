import React, { useState } from 'react';

export default function DropdownMenu({ makeList, handleMakeChange}) {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Handler function to update the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleMakeChange(`https://exam.razoyo.com/api/cars${event.target.value}`);
  };

  return (
    <div>
      <h2>Filter by make:</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select a make</option>
        {makeList.map((make) => (
          <option key={make} value={`?make=${make}`}>
            {make}
          </option>
        ))}
        <option value="">All</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}


