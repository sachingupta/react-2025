
import { useEffect, useState } from "react";
import './DigitalClock.css';

export function DigitalClock() {
    const [date, setDate] = useState(new Date());
    const [isStart, setIsStart] = useState(true);
    useEffect(() => {
      let timerId;
      if (isStart) {
        window.clearInterval(timerId);
        timerId = window.setInterval(() => {
        setDate(new Date());
      }, 1000);
    } else {
      window.clearInterval(timerId);
    }
      // clean up for timer
      return () => {
        window.clearInterval(timerId);
      };
    }, [isStart])
    
  
    return (
      <div className="app">
       <h1>Digital Clock</h1>
       <div className="actionButtons">
       <button onClick={() => setIsStart(true)}>START</button>
       <button onClick={() => setIsStart(false)}>END</button>
       </div>
       <Clock hh={date.getHours()} mm={date.getMinutes()} ss={date.getSeconds()} />
      </div>
    )
  }

export function Clock({hh, mm, ss}) {
    return (
      <div className="clock">
      <Digit2 value={hh}/>
      <Separator />
      <Digit2 value={mm}/>
      <Separator />
      <Digit2 value={ss}/>
      </div>
    );
  }

function Separator() {
    return (<div className="separator">: </div>)
  }


function Digit({value}) {
  return (
    <div className="digit">{value}</div>
  );
}

function Digit2({ value }) {
  const tens = Math.floor(value / 10);
  const ones = value % 10;
  return (
    <div className="digit">
      <RenderSingleDigit value={tens} />
      <RenderSingleDigit value={ones} />
    </div>
  );
}

function RenderSingleDigit({ value }) {
  switch (value) {
    case 0:
      return <Zero />;
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    case 4:
      return <Four />;
    case 5:
      return <Five />;
    case 6:
      return <Six />;
    case 7:
      return <Seven />;
    case 8:
      return <Eight />;
    case 9:
      return <Nine />;
    default:
      return null;
  }
}

function Eight() {
  return (
    <div>
    <div className="square" />
    <div className="square" />
    </div>
  );
}
function Nine() {
  return (
    <div>
    <div className="square" />
    <div className="square noLeft" />
    </div>
  );
}
 
function Zero() {
  return (
    <div>
    <div className="square noBottom" />
    <div className="square noTop" />
    </div>
  );
}
function One() {
  return (
    <div>
    <div className="square noLeft noTop noBottom" />
    <div className="square noLeft noTop noBottom" />
    </div>
  );
}

  export function Two() {
    return (
      <div>
      <div className="square noLeft " />
      <div className="square noRight" />
      </div>
    );
}

function Three() {
  return (
    <div>
    <div className="square noLeft " />
    <div className="square noLeft" />
    </div>
  );
}

function Four() {
  return (
    <div>
    <div className="square noTop " />
    <div className="square noLeft noBottom" />
    </div>
  );
}


function Five() {
  return (
    <div>
    <div className="square noRight " />
    <div className="square noLeft" />
    </div>
  );
}

function Six() {
  return (
    <div>
    <div className="square noRight " />
    <div className="square" />
    </div>
  );
}

function Seven() {
  return (
    <div>
    <div className="square noLeft noBottom" />
    <div className="square noLeft noBottom noTop" />
    </div>
  );
}

