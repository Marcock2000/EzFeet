import { generateComponents } from "@uploadthing/react";
import { OurFileRouter } from "~/server/uploadThing";
 
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();