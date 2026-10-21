const halls = ["Earhart", "Ford", "Hillenbrand", "Wiley", "Windsor"];

export default function DiningPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dining</h1>
      <p className="mt-2 opacity-80">
        yum
      </p>
      <ul className="mt-3 grid gap-4 max-w-xs">
        {halls.map((hall) => (
          <li key={hall} className="border border-gray-300/50 p-4">
            <h2 className="font-semibold">{hall}</h2>
            <p className="mt-1 text-sm opacity-70">placeholder status</p>
          </li>
        ))}
      </ul>
    </div>
  );
}