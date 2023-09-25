function add(a: number, b: number): number {
  return a + b;
}

//Generic
//flexible y fuerte tipado al mismo tiempo
function inserAtBeginning<T>(array: T[], value: T) {
  const newArrat = [value, ...array];
  return newArrat;
}

const demoArray = [1, 2, 3];

const updatedArray = inserAtBeginning(demoArray, -1);
const stringArray = inserAtBeginning<string>(['a', 'b', 'c'], 'd');
