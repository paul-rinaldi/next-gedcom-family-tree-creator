const individualData = await prisma.individual.findUnique({
  where: { id: individualId },
  include: {
    familiesAsParent: true,
    familiesAsChild: true,
    events: true,
    notes: true,
  },
});

const familyData = await prisma.family.findMany({
  where: {
    OR: [
      { husbandId: individualId },
      { wifeId: individualId },
      { children: { some: { id: individualId } } },
    ],
  },
  include: {
    husband: true,
    wife: true,
    children: true,
    events: true,
  },
});

const eventData = await prisma.event.findMany({
  where: {
    OR: [
      { individualId: individualId },
      { familyId: { in: familyData.map((f) => f.id) } },
    ],
  },
  include: {
    individual: true,
    family: true,
  },
});
