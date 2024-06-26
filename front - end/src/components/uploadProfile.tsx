'use client'
import axios from "axios";

const upload = async (file:any) => {
  const data = new FormData();
  // console.log("this is data",data);
  data.append("file", file);
  data.append("upload_preset", "profilepicture");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dzrerjvz2/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if (res.status === 200) {
      console.log("Upload successful:", res.data.url);
      return res.data.url;
    } else {
      console.error("Upload failed. Response:", res);
      throw new Error("Upload failed");
    }
  } catch (error:any) {
    console.error("Error uploading file:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    throw error;
  }
  
  
};

export default upload