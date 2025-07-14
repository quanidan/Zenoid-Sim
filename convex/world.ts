import { internalMutation } from "./_generated/server";

export const initWorld = internalMutation(async (ctx) => {
  const existing = await ctx.db.query("worldState").first();
  if (existing) return; // world already exists

  // Initialize world state
  await ctx.db.insert("worldState", {
    day: 1,
    phase: 0,
    year: 1,
    ritualLog: [],
    relics: [],
    memories: [],
    breedingEvents: [],
  });

  // Spawn initial characters (Zenoids, Shrimp, Fish)
  const characters = [
    {
      name: "Brinny",
      species: "Brine Shrimp",
      location: "TankCenter",
      sprite: "brine_shrimp.png",
    },
    {
      name: "Velveta",
      species: "Blue Velvet Shrimp",
      location: "GravelZone",
      sprite: "blue_velvet.png",
    },
    {
      name: "Cherri",
      species: "Cherry Shrimp",
      location: "PlantCave",
      sprite: "cherry_shrimp.png",
    },
    {
      name: "Monkz",
      species: "Sea Monkey",
      location: "BubbleNest",
      sprite: "sea_monkey.png",
    },
    {
      name: "Catlow",
      species: "Catfish",
      location: "LowerZone",
      sprite: "catfish.png",
    }
  ];

  for (const c of characters) {
    await ctx.db.insert("characters", {
      name: c.name,
      location: c.location,
      sprite: c.sprite,
      memory: [],
      zenoidType: c.species,
    });
  }
});
