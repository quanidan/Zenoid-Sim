import { internalMutation } from "./_generated/server";

export const initWorldState = internalMutation(async (ctx) => {
  await ctx.db.insert("worldState", {
    day: 0,
    phase: 0,
    year: 0,
    breedingEnabled: false,
    nextId: 100,
    locations: [
      { name:"Main Tank", x:50, y:50 },
      { name:"Bubble Pod", x:20, y:80 },
      { name:"Shadeland", x:80, y:50 },
      { name:"Originland", x:50, y:20 },
      { name:"Spiral Plateau", x:50, y:50 }
    ]
  });
});
