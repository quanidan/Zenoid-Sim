import { internalMutation } from "./_generated/server";

export const run = internalMutation(async (ctx) => {
  const w = await ctx.db.query("worldState").first();
  const d = w.day, p = w.phase;

  if (p === 0 && d === 1) {
    // Phase 0 ritual logic — first time spawning behavior
    console.log("🔮 Ritual Triggered: Phase 0, Day 1 — Zenoids imprinting memory");
  }

  // Add more rituals per phase later here
});
