// Reusable empty state — use in any list when there's nothing to show

interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = 'Nothing here yet.' }: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center py-12">
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

export default EmptyState;
