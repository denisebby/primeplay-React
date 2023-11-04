import Select from 'react-select';
import React from 'react';

const options = [
  { value: 'emergency-room', label: 'Emergency Room' },
  { value: 'clinic-referral', label: 'Clinic Referral' },
  { value: 'physician-referral', label: 'Physician Referral' },
  { value: 'court-law', label: 'Court/Law Enforcement' }
];

const MultipleOptionsComponent = () => {
  const [selectedOption, setSelectedOption] = React.useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // You can also do something with the selected options here
    // like sending them to an API or storing in a state management
  };

  return (
    <Select
      isMulti
      name="admit-source"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
      value={selectedOption}
      placeholder="Select Admit Source"
    />
  );
}

export default MultipleOptionsComponent;
