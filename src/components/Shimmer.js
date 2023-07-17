

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="grid place-items-center  my-4">
        <div className=" border-2 bg-gray-300 rounded-xl h-10 w-80"></div>
      </div>
      <div className="flex flex-wrap ">
        {Array(18)
          .fill(" ")
          .map((e, index) => (
            <div
              className="h-64 w-64 m-4 p-3 border-2 rounded shadow-md"
              key={index}
            >
              <div className="h-36  bg-gray-300"></div>
              <div className="h-5 my-1 bg-gray-300"></div>
              <div className="h-5 my-1 bg-gray-300"></div>
              <div className="h-5 my-1 bg-gray-300"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;


