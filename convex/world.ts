import { internalMutation } from "./_generated/server";

export const initWorld = internalMutation(async (ctx) => {
  const existing = await ctx.db.query("worldState").first();
  if (existing) return; // prevent duplicates

  await ctx.db.insert("worldState", {
    day: 1,
    phase: 0,
    year: 1,
    ritualLog: [],
    relics: [],
    memories: [],
    breedingEvents: [],
  });
});
