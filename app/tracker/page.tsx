import Container from "@/components/Container";

const allergens = [
  "Peanuts",
  "Tree nuts",
  "Gluten",
  "Milk",
  "Eggs",
  "Soy",
  "Fish",
  "Wheat",
  "Coconut",
];

const preferences = ["Vegetarian", "Vegan"];

const thresholds = ["Max calories per meal", "Min protein (g)", "Max sodium (mg)"];

const history = [
  {
    day: "Today",
    entries: [
      {name: "MYO Stir Fry", calories: 650},
      {name: "10 cookies", calories: 1500},
    ],
  },
  {
    day: "Yesterday",
    entries: [
      {name: "ice cream", calories: 200},
      {name: "more ice cream", calories: 400},
      {name: "fiber-free ice cream", calories: 199},
    ],
  },
];

const inputStyle =
  "bg-white outline-none ring-1 ring-ash-grey ring-line focus:ring-2 focus:ring-ash-grey";

export default function TrackerPage() {
  return (
    <Container className="flex flex-col gap-4 pb-16">
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Tracking</h1>
      
      <section className="rounded-3xl bg-light-grey p-4">
        <h2 className="text-xl font-semibold">Your filters</h2>
        <p className="mt-1 text-sm text-black-soft">
          Menus will hide foods that don't fit
        </p>

        <h3 className="mt-6 text-sm font-medium">Allergies</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {allergens.map((item) => (
            <button key={item} className="rounded-full bg-white px-4 py-2 text-sm transition-colors hover:bg-grey">
              {item}
            </button>
          ))}
        </div>

        <h3 className="mt-6 text-sm font-medium">Preferences</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {preferences.map((item) => (
            <button key={item} className="rounded-full bg-white px-4 py-2 text-sm transition-colors hover:bg-grey">
              {item}
            </button>
          ))}
        </div>

        <h3 className="mt-6 text-sm font-medium">Nutrition thresholds</h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-14">
          {thresholds.map((label) => (
            <label
              key={label}
              className="flex flex-col gap-1.5 text-sm text-black-soft sm:col-span-4"
            >
              {label}
              <input
                type="number"
                placeholder="No limit"
                className={`rounded-2xl px-4 py-2.5 text-black ${inputStyle}`}
              />
            </label>
          ))}
          <label className="flex flex-1 flex-col gap-1.5 text-sm text-black-soft sm:col-span-2">
            Add threshold
            <button
              type="button"
              className="rounded-2xl bg-white border-ash-grey border px-4 py-2.5 text-black-soft transition-colors hover:bg-grey"
            >
              - Select -
            </button>
          </label>
        </div>
      </section>

      <section className="rounded-3xl bg-light-grey p-4">
        <h2 className="text-xl font-semibold">Log a food</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Food name"
            className={`flex-1 rounded-2xl px-5 py-3 ${inputStyle}`}
          />
          <input
            type="number"
            placeholder="Calories"
            className={`rounded-2xl px-5 py-3 sm:w-36 ${inputStyle}`}
          />
          <button
            type="button"
            className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
          >
            Add
          </button>
        </div>
      </section>

      <section className="rounded-3xl bg-light-grey p-4">
        <h2 className="text-xl font-semibold">History</h2>
        <div className="mt-4 flex flex-col gap-6">
          {history.map((day) => {
            const total = day.entries.reduce(
              (sum, entry) => sum + entry.calories,
              0,
            );
            return (
              <div key={day.day}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">{day.day}</h3>
                  <p className="text-sm text-black-soft">{total} cal</p>
                </div>
                <ul className="mt-2 divide-y divide-line divide-light-grey rounded-2xl bg-white">
                  {day.entries.map((entry) => (
                    <li
                      key={entry.name}
                      className="flex items-center justify-between px-5 py-3"
                    >
                      <span>{entry.name}</span>
                      <span className="text-sm text-black-soft">
                        {entry.calories} cal
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}