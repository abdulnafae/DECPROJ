import React, { useState } from 'react';

const ImageToggle = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prevIsImage1Visible) => !prevIsImage1Visible);
  };

  return (
    <div>
      <img
        src={isImage1Visible ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtMmf144_S_LqJDdZ25GJp-ExrFOQXLn5sg&usqp=CAU' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyxzaRmaWsMVnn25L66jvKUAnPrydj9M5Ww&usqp=CAU'}
        alt={isImage1Visible ? 'Image 1' : 'Image 2'}
        style={{ width: '300px', height: '300px' }}
        onClick={toggleImage}
      />
    </div>
  );
};

export default ImageToggle;
