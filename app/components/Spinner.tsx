const Spinner = ({height}:{height: string}) => {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <div className="w-12 h-12 border-4 border-[#FFA500] border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;