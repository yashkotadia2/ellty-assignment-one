import Button from "../components/Button";
import CheckboxCard from "../components/CheckboxCard";
import HorizontalLine from "../components/HorizontalLine";

const labelArray = ["All Pages", "Page 1", "Page 2", "Page 3", "Page 4"];

const Home = () => {
  return (
    <div className="border w-fit py-[10px] px-[5px] rounded-[6px] shadow-custom bg-white">
      {labelArray.map((label, index) => (
        <>
          <CheckboxCard label={label} />
          {(index == 0 || index + 1 == labelArray.length) && <HorizontalLine />}
        </>
      ))}
      <div className="flex justify-center items-center mt-[20px] mb-[10px]">
        <Button text="Done" />
      </div>
    </div>
  );
};

export default Home;
