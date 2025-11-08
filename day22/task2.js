class movie {
  constructor(title, writer, year) {
    this.title = title;
    this.writer = writer;
    this.year = year;
  }

  describe() {
    console.log(`"${this.title}" by ${this.writer}, released in ${this.year}.`);
  }
}


const favmovie = new movie("ghilli", "bharathan", 2004);
favmovie.describe(); 

