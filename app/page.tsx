import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black">
        <header>
          <h1 className="text-3xl font-bold">Our Last Days</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            History is closing its book, and we are the final chapter.
          </p>
        </header>

        <Image
          src="/TitleImage.jpeg"
          alt="An hourglass on a cliffside ledge with a blood-red moon rising over a dark landscape"
          width={1500}
          height={1000}
          className="w-full h-auto rounded-lg"
          priority
        />

        <section className="flex flex-col gap-4 max-w-6xl text-zinc-700 dark:text-zinc-300">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            The Unprecedented Horizon
          </h2>

          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
            A Barrier That No Generation Could Cross
          </h3>
          <p>
            For thousands of years, students of biblical prophecy have
            scanned the horizons of human history, searching for the
            unmistakable signs of the times. Generation after generation has
            looked out at the shifting tides of geopolitics, moral decay,
            and cultural upheaval, wondering quietly if their specific era
            would be chosen to witness the return of Jesus Christ and the
            onset of the seven-year tribulation.
          </p>
          <p>
            Yet, every preceding generation faced an insurmountable,
            physical boundary: the infrastructure required to fulfill the
            sweeping global mandates described in the Book of Revelation
            simply did not exist. Localized empires, manual bookkeeping
            ledgers, physical currencies, and the inherent inefficiencies of
            human bureaucracies kept the world safely fragmented.
          </p>
          <p>
            No single government, no matter how tyrannical or ambitious,
            possessed the administrative tools to monitor and control the
            daily commerce of every individual on earth. Ancient Roman
            Caesars could demand worship, and medieval monarchs could
            enforce localized edicts, but neither could regulate the daily
            buying and selling of a peasant on another continent.
          </p>

          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
            The Barrier Has Vanished
          </h3>
          <p>
            Today, that protective barrier of human inefficiency has
            completely vanished. For the first time in recorded history, we
            are witnessing an unprecedented, measurable convergence of
            realities:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>the mathematical completion of a 6,000-year theological timeline</li>
            <li>the miraculous and prophesied rebirth of Israel</li>
            <li>
              the rigid and publicly stated policy deadlines of global
              governance institutions
            </li>
            <li>
              the explosive, runaway acceleration of artificial intelligence
            </li>
            <li>
              the physical realization of total surveillance infrastructure
            </li>
            <li>the quiet dissolution of sovereign borders</li>
            <li>the structural shift toward a ten-region global model</li>
            <li>
              the rapid rise of transhumanist and interfaith movements
            </li>
            <li>the establishment of global emergency protocols</li>
          </ul>
          <p>
            All of these are colliding within the exact same single-digit
            annual window. When you look at the big picture, the illusion of
            &quot;business as usual&quot; is rapidly evaporating, and the
            world stage is fully set for the final prophetic chapter.
          </p>
        </section>
      </main>
    </div>
  );
}
