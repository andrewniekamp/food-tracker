
export class Food {
  public createdDate = new Date();
  public logDate = (this.createdDate.getHours() + ":" +
                    this.createdDate.getMinutes()
                    //optional for testing
                    // + ":" +
                    // this.createdDate.getSeconds()
                    //end test
                    + " on " +
                    (this.createdDate.getUTCMonth() + 1) + "/" +
                    this.createdDate.getUTCDate() + "/" +
                    this.createdDate.getUTCFullYear()
                  );
  constructor(public name: string, public calories: number, public description: string) {

  }
}
