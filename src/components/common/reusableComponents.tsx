export function Loader() {
  return (
    <div className="flex justify-center flex-row items-center">
      <div className="h-2 w-2 bg-gray-300 rounded-full animate-blink shadow-[0_0_10px_#3b82f6]"></div>
      <div className="text-sm pl-4 opacity-60 font-semibold">
        Fetching Latest Price
      </div>
    </div>
  );
}
