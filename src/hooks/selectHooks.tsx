import React, { useState } from "react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Array<any>;
};

export const useSelect: React.FC<Props> = (props: Props) => {
  const [selectValue, setSelectValue] = useState();

  const optionJsx = props.options.map((option, i) => {
    return <option value={i}>{option}</option>;
  });

  function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectValue(event.target.value);
  }

  return (
    <div>
      <select value={selectValue} onChange={handleSelectChange}>
        {optionJsx}
      </select>
      <br />
      {selectValue}
    </div>
  );
};
