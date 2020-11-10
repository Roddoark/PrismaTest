import React from 'react';
import Label from '../../../components/Label/Label';
import Select from '../../../components/Select/Select';
import './SortByFilter.css';

export default function SortByFilter() {
  return (
    <div className="sortAndFilters-fields">
      <div>
        <Label
          htmlFor="alphabeticalOrder"
        >
          Trier par
        </Label>
        <Select
          id="alphabeticalOrder"
          defaultOption="Ordre alphabétique"
        />
      </div>
    </div>
  );
}
