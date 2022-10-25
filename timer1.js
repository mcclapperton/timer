process.argv.slice(2).forEach((number) => {
  {
    if (number !== NaN && number >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, number * 1000);
      // console.log("is this working??????");
    }
  }
});
