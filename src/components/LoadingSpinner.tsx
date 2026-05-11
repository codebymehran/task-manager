// Reusable loading spinner — drop anywhere you need a loading state

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted border-t-foreground" />
    </div>
  );
};

export default LoadingSpinner;
