import Container from "@/components/Container";

const halls = ["Earhart", "Ford", "Hillenbrand", "Wiley", "Windsor"];

export default function DiningPage() {
  return (
    <Container>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Dining Halls</h1>
      
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ul className="flex flex-col gap-4">
            {halls.map((hall) => (
              <li key={hall}>
                <button 
                  type="button"
                  className="w-full text-left rounded-3xl bg-light-grey p-4 transition-colors hover:bg-grey"
                >
                  <h2 className="text-lg font-semibold">{hall}</h2>
                  <p className="mt-1 flex items-center gap-2 text-sm opacity-70">
                    <span className="h-2.5 w-2.5 rounded-full bg-main-green"/>
                    Open, closes at placeholder time
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-light-grey lg:col-span-2 p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <p className="mt-1 text-sm text-black-soft">Your nutrition for today</p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-black-soft">Calories</p>
              <p className="mt-1 text-md">number</p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-black-soft">Protein</p>
              <p className="mt-1 text-md">number</p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-black-soft">other specific stat for user</p>
              <p className="mt-1 text-md">number</p>
            </div>
          </div>

          <div className="mt-4 flex h-56 items-center justify-center rounded-2xl bg-white text-sm text-black-soft">
            chart or graph can go here
          </div>
          <div className="mt-4 flex h-32 items-center justify-center rounded-2xl bg-white text-sm text-black-soft">
            maybe recent activity here
          </div>
        </div>
      </div>
    </Container>
  );
}