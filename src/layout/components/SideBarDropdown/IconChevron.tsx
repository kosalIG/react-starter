import { IconChevronRight } from 'assets/icons';
import React from 'react';

const IconChevron: React.FC<{ isDropdown?: boolean }> = ({
  isDropdown = false,
}) => {
  return (
    <span
      className={`transition duration-150 ease-in-out ${
        isDropdown && 'rotate-90'
      }`}
    >
      <IconChevronRight className="w-5 h-5" />
    </span>
  );
};

export default IconChevron;
