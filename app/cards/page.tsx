import Link from "next/link"
const teams = [
  {
    id: 1,
    name: "Chennai Super Kings",
    shortName: "CSK",
    color: "#F9CD1B",
    titles: 5,
    captain: "MS Dhoni",
    home: "Chennai",
  },
  {
    id: 2,
    name: "Mumbai Indians",
    shortName: "MI",
    color: "#004BA0",
    titles: 5,
    captain: "Hardik Pandya",
    home: "Mumbai",
  },
  {
    id: 3,
    name: "Royal Challengers Bangalore",
    shortName: "RCB",
    color: "#EC1C24",
    titles: 0,
    captain: "Faf du Plessis",
    home: "Bangalore",
  },
  {
    id: 4,
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    color: "#3A225D",
    titles: 3,
    captain: "Shreyas Iyer",
    home: "Kolkata",
  },
  {
    id: 5,
    name: "Delhi Capitals",
    shortName: "DC",
    color: "#00008B",
    titles: 0,
    captain: "Rishabh Pant",
    home: "Delhi",
  },
  {
    id: 6,
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    color: "#F7521E",
    titles: 1,
    captain: "Pat Cummins",
    home: "Hyderabad",
  },
  {
    id: 7,
    name: "Rajasthan Royals",
    shortName: "RR",
    color: "#EA1A85",
    titles: 1,
    captain: "Sanju Samson",
    home: "Jaipur",
  },
  {
    id: 8,
    name: "Punjab Kings",
    shortName: "PBKS",
    color: "#ED1B24",
    titles: 0,
    captain: "Shikhar Dhawan",
    home: "Mohali",
  },
  {
    id: 9,
    name: "Gujarat Titans",
    shortName: "GT",
    color: "#1C1C1C",
    titles: 1,
    captain: "Shubman Gill",
    home: "Ahmedabad",
  },
  {
    id: 10,
    name: "Lucknow Super Giants",
    shortName: "LSG",
    color: "#A72056",
    titles: 0,
    captain: "KL Rahul",
    home: "Lucknow",
  },
]

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-background">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Page Header */}
        <div className="text-center mb-14 animate-slide-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">IPL 2026</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground glow-accent mb-4">
            All Teams
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore all 10 franchises competing this season
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer">

                {/* Color bar top */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: team.color }}
                />

                {/* Card Body */}
                <div className="p-6">

                  {/* Short name badge + titles */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg"
                      style={{
                        backgroundColor: `${team.color}22`,
                        color: team.color,
                        border: `2px solid ${team.color}44`,
                      }}
                    >
                      {team.shortName}
                    </div>

                    {team.titles > 0 ? (
                      <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
                        <span className="text-accent text-xs">🏆</span>
                        <span className="text-accent text-xs font-bold text-white">{team.titles}x</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 bg-muted/50 border border-border rounded-full px-3 py-1">
                        <span className="text-muted-foreground text-xs font-medium">No titles</span>
                      </div>
                    )}
                  </div>

                  {/* Team name */}
                  <h2 className="text-lg font-bold text-foreground leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                    {team.name}
                  </h2>

                  {/* Home city */}
                  <p className="text-xs text-muted-foreground mb-4">{team.home}</p>

                  {/* Divider */}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Captain</p>
                        <p className="text-sm font-semibold text-foreground mt-0.5">{team.captain}</p>
                      </div>
                      <div
                        className="text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: `${team.color}22`, color: team.color }}
                      >
                        View →
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}   