export const checkWinRow = (oPosition, xPosition) => {
  for (var k = 0; k < oPosition.length; k++) {
    const item = oPosition[k];

    const i = +item.split('-')[0]
    const j = +item.split('-')[1]

    const next5 = `${i + 5}-${j}`;
    const next4 = `${i + 4}-${j}`;
    const next3 = `${i + 3}-${j}`;
    const next2 = `${i + 2}-${j}`;
    const next1 = `${i + 1}-${j}`;
    const prev1 = `${i - 1}-${j}`;
    const win = (
      oPosition.indexOf(next1) > -1 &&
      oPosition.indexOf(next2) > -1 &&
      oPosition.indexOf(next3) > -1 &&
      oPosition.indexOf(next4) > -1 &&
      (xPosition.indexOf(next5) === -1 || xPosition.indexOf(prev1) === -1)
    )
    // console.log(oPosition.indexOf(next4) > -1)
    // console.log(i)
    // console.log(j)
    // console.log(i)
    // console.log(oPosition)
    if (win) {
      // console.log(win)
      return win;
    }
  }

}

export const checkWinColum = (oPosition, xPosition) => {
  for (var k = 0; k < oPosition.length; k++) {
    const item = oPosition[k];

    const i = +item.split('-')[0]
    const j = +item.split('-')[1]

    const next5 = `${i}-${j + 5}`;
    const next4 = `${i}-${j + 4}`;
    const next3 = `${i}-${j + 3}`;
    const next2 = `${i}-${j + 2}`;
    const next1 = `${i}-${j + 1}`;
    const prev1 = `${i}-${j - 1}`;
    const win = (oPosition.indexOf(next1) > -1 && oPosition.indexOf(next2) > -1 && oPosition.indexOf(next3) > -1 && oPosition.indexOf(next4) > -1 && (xPosition.indexOf(next5) === -1 || xPosition.indexOf(prev1) === -1))
    if (win) {
      // console.log(win)
      return win;
    }
  }

}

export const checkWinCross = (oPosition, xPosition) => {
  for (var k = 0; k < oPosition.length; k++) {
    const item = oPosition[k];

    const i = +item.split('-')[0]
    const j = +item.split('-')[1]

    const next5 = `${i + 5}-${j + 5}`;
    const next4 = `${i + 4}-${j + 4}`;
    const next3 = `${i + 3}-${j + 3}`;
    const next2 = `${i + 2}-${j + 2}`;
    const next1 = `${i + 1}-${j + 1}`;
    const prev1 = `${i - 1}-${j - 1}`;
    const win = (oPosition.indexOf(next1) > -1 && oPosition.indexOf(next2) > -1 && oPosition.indexOf(next3) > -1 && oPosition.indexOf(next4) > -1 && (xPosition.indexOf(next5) === -1 || xPosition.indexOf(prev1) === -1))
    if (win) {
      // console.log(win)
      return win;
    }
  }

}




export const checkWin = (oPosition, xPosition, player) => {
  if (checkWinRow(oPosition, xPosition) || checkWinColum(oPosition, xPosition) || checkWinCross(oPosition, xPosition)) {
    // setTimeout(alert(`${player} win`), 5000)
  }
  return checkWinRow(oPosition, xPosition) || checkWinColum(oPosition, xPosition) || checkWinCross(oPosition, xPosition)
}

export const pad = (val) => {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}