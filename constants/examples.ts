export const examples = [
  {
    name: 'Basic Transform',
    input: JSON.stringify([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]),
    mapFunction: 'item => ({ ...item, active: true })',
  },
  {
    name: 'Extract Values',
    input: JSON.stringify([
      { user: { name: 'John' } },
      { user: { name: 'Jane' } },
    ]),
    mapFunction: 'item => item.user.name',
  },
];
