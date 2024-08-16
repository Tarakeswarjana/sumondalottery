import React, { useEffect, useState } from "react";

const SecoundPrizeHome = () => {
  const [createText, setCreateText] = useState(false);

  useEffect(() => {
    const textTyping = setTimeout(() => {
      setCreateText(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-black fixed inset-0">
      <dib className="flex flex-col justify-center item-center w-[60%] h-[100vh] mx-auto text-center">
        {createText && (
          <div className="typing_text2">
            <h4 className="text-7xl font-extrabold text-white">PXWELL</h4>
          </div>
        )}
        <div className="nextDraw">LIVE NEXT DRAW</div>
        <div><span>2</span><sub>nd</sub> <span>Prize</span></div>
        <div>as</div>
      </dib>
    </div>
  );
};

export default SecoundPrizeHome;
