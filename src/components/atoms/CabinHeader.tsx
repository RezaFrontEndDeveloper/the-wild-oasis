import React from 'react';

function CabinHeader() {
  return (
    <div className="grid grid-cols-[80px_2fr_1fr_1fr_1fr_1fr]">
      <p className="font-bold">image</p>
      <p className="font-bold">Cabin</p>
      <p className="font-bold">Capasity</p>
      <p className="font-bold">Price</p>
      <p className="font-bold">Discount</p>
    </div>
  );
}

export default CabinHeader;
