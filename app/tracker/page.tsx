import Container from "@/components/Container";

export default function TrackerPage() {
  return (
    <Container>
      <div>
        <h1 className="text-3xl font-bold">Calorie Tracker</h1>
        <p className="mt-2 opacity-80">
          placeholder description
        </p>
        <div className="mt-4 border border-dashed border-gray-300/50 p-6 text-center opacity-70">
          nothing logged yet
        </div>
      </div>
    </Container>
  );
}