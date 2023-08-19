export default function LoadingAnimation() {
  return (
    <div className="flex flex-row space-x-5 pt-3">
      <span class="relative flex h-6 w-6">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-6 w-6 bg-teal-500"></span>
      </span>
      <span className="text-lg italic">Menunggu konfirmasi block ...</span>
      <span class="relative flex h-6 w-6">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-6 w-6 bg-teal-500"></span>
      </span>
    </div>
  );
}
