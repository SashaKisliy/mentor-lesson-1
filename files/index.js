const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);
const moviesPath = path.join(__dirname, "..", "db", "movies.json");
const alexPath = path.join(__dirname, "..", "alex", "movies.json");
// console.log(moviesPath);

class MoviesOperation {
  constructor(moviesPath, alexPath) {
    this.moviesPath = moviesPath;
    this.alexPath = alexPath;
  }
  show = async () => {
    const data = await fs.readFile(this.moviesPath, "utf-8");
    console.log(data);
  };

  async create(moviesData) {
    await fs.writeFile(this.moviesPath, JSON.stringify(moviesData, null, 4));
  }

  async update(newMovies) {
    await fs.appendFile(this.moviesPath, JSON.stringify(newMovies, null, 4));
  }

  async remove() {
    await fs.unlink(this.moviesPath);
  }

  async replace() {
    await fs.rename(this.moviesPath, this.alexPath);
  }
}

const file = new MoviesOperation(moviesPath, alexPath);

file.show();
const data = [
  {
    Title: "Avatar",
    Year: "2009",
  },
  {
    Title: "I Am Legend",
    Year: "2007",
  },
  {
    Title: "300",
    Year: "2006",
  },
];

// file.create(data);
// file.update({
//   Title: "Avator 3",
//   Year: "2029",
// });
// file.remove();
// file.replace();
function asyncHandler(func, data) {
  try {
    if (data) {
      return func(data);
    }
    return func();
  } catch (error) {
    console.log(error);
  }
}

// asyncHandler(file.show.bind(file));
// asyncHandler(file.show);
// asyncHandler(file.create.bind(file), data);
