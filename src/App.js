import React, { useState, useEffect } from 'react';
import './App.css';
import { checkWin, pad } from './utils/checkWin';


function App() {
  const [size, setSize] = useState(20);
  const [win, setWin] = useState(false);
  const [playerTurn, setPlayerTurn] = useState("x");
  const [playerXName, setPlayerXName] = useState("");
  const [playerYName, setPlayerYName] = useState("");
  const [nhapTen, setNhapTen] = useState(false);
  const [second, setSecond] = useState(0);
  // const [minutes, setMinutes] = useState(0);

  const [oPosition, setOPosition] = useState([]);
  const [xPosition, setXPosition] = useState([]);

  var interval;

  useEffect(() => {
    if (nhapTen) {
      interval = setInterval(() => {
        setSecond(prev => {
          if (prev === 20 * 60) {
            clearInterval(interval);
            alert("Hết giờ. Hòa!");

          }
          return prev + 1
        })
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [nhapTen]);



  const onClickBox = (i, j) => {
    // console.log(i, j)
    const index = xPosition.indexOf(`${i}-${j}`)
    const index2 = oPosition.indexOf(`${i}-${j}`)
    if (index === -1 && index2 === -1 && !win && nhapTen) {

      if (playerTurn === "x") {
        setXPosition([...xPosition, `${i}-${j}`])
        if (checkWin([...xPosition, `${i}-${j}`], [...oPosition])) {
          alert(playerXName + " win");
          setWin(true);

        }
        if (+i < 2 || +i > size - 2 || +j < 2 || +j > size - 2) {
          setSize(prev => prev + 4);
          const nowOPosition = [...oPosition]
          const nowXPosition = [...xPosition, `${i}-${j}`]
          // console.log(nowOPosition)
          const newOPosition = nowOPosition.map((item, index) => {
            const l = item.split("-")[0]
            const m = item.split("-")[1]
            return `${+l + 2}-${+m + 2}`
          })
          const newXPosition = nowXPosition.map((item, index) => {
            const p = item.split("-")[0]
            const q = item.split("-")[1]
            return `${+p + 2}-${+q + 2}`
          })
          // console.log(newOPosition)
          setOPosition(newOPosition)
          setXPosition(newXPosition)
        }
        setPlayerTurn("o")
      } else {
        setOPosition([...oPosition, `${i}-${j}`])
        if (checkWin([...oPosition, `${i}-${j}`], [...xPosition])) {
          alert(playerXName + " win");
          setWin(true);

        }
        if (+i < 2 || +i > size - 2 || +j < 2 || +j > size - 2) {
          setSize(prev => prev + 4);
          const nowOPosition = [...oPosition, `${i}-${j}`]
          const nowXPosition = [...xPosition]
          // console.log(nowOPosition)
          const newOPosition = nowOPosition.map((item, index) => {
            const l = item.split("-")[0]
            const m = item.split("-")[1]
            return `${+l + 2}-${+m + 2}`
          })
          const newXPosition = nowXPosition.map((item, index) => {
            const p = item.split("-")[0]
            const q = item.split("-")[1]
            return `${+p + 2}-${+q + 2}`
          })
          // console.log(newOPosition)
          setOPosition(newOPosition)
          setXPosition(newXPosition)
        }
        setPlayerTurn("x")
      }
    }




  }
  const checkBox = (i, j) => {
    const index = xPosition.indexOf(`${i}-${j}`)
    const index2 = oPosition.indexOf(`${i}-${j}`)
    if (index > -1) {
      return "x"
    }
    if (index2 > -1) {
      return "o"
    }
  }

  const onChangeInput1 = (e) => {
    setPlayerXName(e.target.value)
    setNhapTen(false)
  }

  const onChangeInput2 = (e) => {
    setPlayerYName(e.target.value)
    setNhapTen(false)

  }

  const nhapTenXfunc = () => {
    setNhapTen(true)
  }



  const row = (j) => {
    const result = []
    for (let i = 0; i < size; i++) {
      result.push(
        <th className={`${i}-${j}`} key={`${i}-${j}`} onClick={() => onClickBox(i, j)}>
          <div className="cell">{checkBox(i, j)}</div>
        </th>
      )
    }
    return <tr key={j}>{result}</tr>
  }



  const box = () => {
    const result = []
    for (let j = 0; j < size; j++) {
      result.push(row(j))
    }
    return result
  }


  return (

    < div className="App" >
      Nhập tên vào 2 ô và click OK để chơi <br />
      Khi một người chiến thắng hoặc hết giờ hòa thì không click để đánh thêm được nữa <br />
      Nếu click vào một trong 2 ô rìa của bàn cờ thì bàn cờ tự động thêm 2 hàng vào 4 cạnh của bàn cờ
      <br /><br />
      <div className="header">
        <input onChange={onChangeInput1} /> <button onClick={nhapTenXfunc}>Ok</button>
        <input onChange={onChangeInput2} />
        <div className="name"><h1>{(nhapTen) && `${playerXName} vs ${playerYName}`}</h1></div>
        <div className="clock">{(nhapTen) && `${pad(Math.floor(second / 60) % 60)}:${pad(second % 60)}`}</div>
      </div>
      <br /><br /><br />
      <div className="main">
        <div className="center">
          <table className="fixed">
            <tbody>
              {box()}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

export default App;
