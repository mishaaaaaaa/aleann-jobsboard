import React from "react";

type ImageGroupType = {
  imgs?: string[];
};

function ImageGroup({ imgs }: ImageGroupType) {
  return (
    <div className="attached_images grow">
      <p className="text-xl font-semibold mb-2">Attached images</p>
      <div className="images_group border-t-2 space-y-2 pt-2 flex items-center overflow-x-auto space-x-2">
        {imgs &&
          imgs.map((img, index) => {
            return (
              <div className="img  object-contain" key={index}>
                <img
                  src={img}
                  className="w-full max-w-xl h-auto rounded-lg"
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImageGroup;
