import React from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { UploadResponse } from "../../utils/types";
import { toast } from "react-hot-toast";

const environment = import.meta.env;

type ImageInputProps = {
  image: string;
  setImage: (url: string) => void;
  lable: string;
};

export default function ImageInput({
  image,
  setImage,
  lable,
}: ImageInputProps) {
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        setImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-4">
      {image && (
        <img
          src={image}
          alt="user photo"
          className="object-scale-down w-1/2 h-1/2 mb-4 border-2 border-sky-600"
        />
      )}

      <IKContext
        publicKey={environment.VITE_APP_PUBLICKEY}
        urlEndpoint={environment.VITE_APP_URL_ENDPOINT}
        authenticationEndpoint={environment.VITE_APP_AUTHENTICATION_ENDPOINT}
      >
        <label htmlFor="imageOfUser" className="cursor-pointer">
          {lable}
          <sup className="text-red-500">*</sup>
        </label>
        <IKUpload
          fileName="user"
          onError={() =>
            console.log("An error occurred while uploading an image.")
          }
          onSuccess={(res: UploadResponse) => {
            setImage(res.url);
            toast.success("Thumbnail Upload Successful");
          }}
          id="imageOfUser"
          name="img"
          data-max-size="2048"
          type="file"
          onChange={handleFile}
          validateFile={(file) => {
            if (
              // file.size < 2 * 1024 * 1024 &&
              /[^\s]+(.*?).(jpg|png)$/i.test(file.name)
            ) {
              return true;
            }
            // console.log(
            //   "Image should be less than 2 mb with jpg and png extension"
            // );
            toast.error("Invalid Thumbnail");
            return false;
          }}
        />
      </IKContext>
    </div>
  );
}
