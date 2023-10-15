// code your solution here
function superbowlWin(record){
    const win=record.find((record) => record.result === "W")
    if (win === undefined) {
        return undefined;
      }
     if (win !== undefined)
      return win.year;
    }