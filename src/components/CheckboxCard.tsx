import Checkbox from "./Checkbox";

const CheckboxCard = ({ label }: { label: string }) => {
  return (
    <div className="w-[370px] h-[42px] py-[8px] ps-[15px] pe-[22px] flex justify-between">
      <div>{label}</div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default CheckboxCard;
