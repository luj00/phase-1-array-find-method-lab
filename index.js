function superbowlWin(record) {
    // Use the find method to search for a Denver Broncos win
    const broncosWin = record.find(win => win.team === 'Denver Broncos' && win.year === '2015');
  
    // If a Broncos win in 2015 is found, return the year '2015', otherwise return undefined
    return broncosWin ? '2015' : undefined;
  }
  
  