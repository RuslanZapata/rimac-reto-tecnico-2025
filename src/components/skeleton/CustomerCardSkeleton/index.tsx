const CustomerCardSkeleton = () => {
  return (
    <div className="w-full max-w-[256px] h-[180px] p-6 border border-gray-200 rounded-2xl bg-white animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
      <div className="h-6 w-24 bg-gray-200 rounded mb-3 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default CustomerCardSkeleton;