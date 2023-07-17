const MenuShimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-center gap-16 items-center py-7 bg-gray-400">
        <div className="w-72 h-52 rounded bg-gray-300"></div>
        <div>
          <div className="w-44 h-5 rounded bg-gray-300"></div>
          <div className="w-44 h-5 my-4 rounded bg-gray-300"></div>
          <div className="w-44 h-5 rounded bg-gray-300"></div>
          <div className="w-44 h-5 my-4 rounded bg-gray-300"></div>
        </div>
      </div>

      <div className="mx-64">
        {Array(7)
          .fill(" ")
          .map((e, index) => (
            <div
              className="h-14 m-4 p-3  bg-gray-300 border-2 rounded shadow-md"
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
