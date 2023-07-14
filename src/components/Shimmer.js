const Shimmer = () => {
  return (
    <div className="shimmerUi">
      {Array(10)
        .fill(" ")
        .map((e,index) => (
          <div className="shimmer" key={index}>
            <div className="img"></div>
            <div className="name"></div>
            <div className="name"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
