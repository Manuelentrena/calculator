interface Hero{
  name: string;
  age?: number;
  powers: number[];
  getName?: () => string;
}