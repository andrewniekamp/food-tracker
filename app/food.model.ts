
export class Food {
  constructor(public name: string, public calories: number, public description: string, public eaten = new Date()) {

  }
}
