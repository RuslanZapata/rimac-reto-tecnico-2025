const SummaryCardSkeleton = () => {
  return (
    <div
      className={`p-8 w-full rounded-3xl shadow-[0px_1px_24px_0px_#AEACF340]`}
    >
      <div className="mb-2 pb-2 border-b border-[#d7dbf5]">
        <div className="h-4 w-40 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-7 flex items-center">
          <div className="mr-2 w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <div className="h-6 w-36 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-6 w-28 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-44 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SummaryCardSkeleton;
