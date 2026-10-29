import Link from "next/link";
import Container from "@/components/Container";

const collageLeft = [
  "aspect-[2] bg-cream",
  "aspect-[4/3] bg-green",
  "aspect-[3/2] bg-blue",
];

const collageRight = [
  "aspect-[3/2] bg-blue-deep",
  "aspect-[4/3] bg-cream-deep",
];

const features = [
  {
    title: "menus that fit your diet",
    description:
      "tailor Purdue's menus to your allergies, preferences, and nutrition thresholds. menus will automatically hide foods you can't eat.",
    buttonLabel: "View dining halls",
    buttonLink: "/dining",
    tone: "bg-green",
  },
  {
    title: "picks made for you",
    description:
      "see personalized recommendations based on your filters and past meals. use the dashboard to view your daily and weekly progress.",
    buttonLabel: "Open dashboard",
    buttonLink: "/dining",
    tone: "bg-blue",
  },
  {
    title: "track what you eat",
    description:
      "log your meals and track your nutrition intake with the tracker. don't feel like manually logging what you eat? try \"quick add\" from the menus!",
    buttonLabel: "Open calorie tracker",
    buttonLink: "/tracker",
    tone: "bg-cream",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-8">
          <div>
            <p className="max-w-md text-lg font-semibold text-black px-4">
              manage your Purdue diet
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Bite by Bite
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dining"
                className="rounded-2xl bg-main-green px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
              >
                View dining halls
              </Link>
              <Link
                href="/tracker"
                className="rounded-2xl bg-light-grey px-6 py-3 font-medium text-black transition-colors hover:bg-grey"
              >
                Open calorie tracker
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {collageLeft.map((style) => (
                <div key={style} className={`rounded-3xl ${style}`} />
              ))}
            </div>
            <div className="mt-15 flex flex-col gap-4">
              {collageRight.map((style) => (
                <div key={style} className={`rounded-3xl ${style}`} />
              ))}
              <p className="text-sm text-black">
                *photos taken by me!
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-light-grey">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2">
          <div className="rounded-3xl aspect-[4/3] bg-grey" />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">why?</h2>
            <p className="mt-4 text-black">
              this past summer '26, i became unexpectedly hospitalized for a month<br />
              <br />
              after being released, i was put on a strict recovery diet. but when i started college, i realized how hard it was to manage my diet here<br />
              <br />
              while Purdue has both official and student-made dining apps, they lack many features that help students with dietary restrictions<br />
              <br />
              the apps provide allergen info and nutrition facts, but don't let you filter menus based on your specific needs, or let you track your meals<br />
              <br />
              i found it tedious to click thru every menu item to make sure it was something i could eat<br />
              <br />
              so i made this app to help students like me manage their diets at Purdue!<br />
              <br />
              if you have special dietary needs, or if you're just trying to eat healthier, i hope this makes things easier<br />
              <br />
              and if you're recovering, remember it's ok to take things bite by bite<br />
              <br />
              -hudson cote & haasini some // launchpad '26
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="flex justify-center text-3xl font-semibold tracking-tight">
            meals made easy for u
          </h2>
          <div className="mt-12 flex flex-col gap-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className={`rounded-3xl aspect-[5/3] ${feature.tone} ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-black">{feature.description}</p>
                  <div className="mt-8">
                    <Link
                      href={feature.buttonLink}
                      className="rounded-2xl bg-main-green px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
                    >
                      {feature.buttonLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}