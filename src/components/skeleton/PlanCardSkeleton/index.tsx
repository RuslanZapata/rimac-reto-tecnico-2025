const PlanCardSkeleton = () => {
  return (
    <div className="w-full max-w-[288px] min-h-[400px] p-6 border border-gray-200 rounded-2xl bg-white animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      {/* Plan name */}
      <div className="h-8 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
      
      {/* Price */}
      <div className="h-6 w-20 bg-gray-200 rounded mb-6 animate-pulse"></div>
      
      {/* Features list */}
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      {/* Button */}
      <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default PlanCardSkeleton;