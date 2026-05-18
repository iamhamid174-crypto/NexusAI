export function ToolCardSkeleton() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl skeleton" />
        <div>
          <div className="h-4 w-24 skeleton rounded mb-1" />
          <div className="h-3 w-16 skeleton rounded" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-3 skeleton rounded w-full" />
        <div className="h-3 skeleton rounded w-3/4" />
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-16 skeleton rounded-full" />
        <div className="h-5 w-16 skeleton rounded-full" />
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700/50">
        <div className="h-4 w-20 skeleton rounded" />
        <div className="h-7 w-16 skeleton rounded-lg" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="h-44 skeleton" />
      <div className="p-5 space-y-3">
        <div className="h-4 skeleton rounded w-3/4" />
        <div className="h-4 skeleton rounded w-full" />
        <div className="h-3 skeleton rounded w-1/2" />
      </div>
    </div>
  );
}
