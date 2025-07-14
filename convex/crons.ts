import { internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const tickDay = internalMutation(async (ctx) => {
  const world = await ctx.db.query("worldState").first();
  let { day, phase, year } = world;

  day++;
  await ctx.db.patch(world._id, { day });

  // Phase or year reset
  if (day > 365) {
    day = 0;
    year++;
    phase = (phase + 1) % 5;
    await ctx.db.patch(world._id, { day, phase, year });
  }

  // Fire core behavior events
  await ctx.scheduler.runAfter(0, internal.memory.applyHooks, {});
  await ctx.scheduler.runAfter(0, internal.rituals.run, {});
});
