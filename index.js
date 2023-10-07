function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W" && obj.team === "Denver Broncos");
    return win ? win.year : undefined;
  }
  
  
  