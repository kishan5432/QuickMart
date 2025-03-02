const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dse13zdp7",
  api_key: "772848927726232",
  api_secret: "SA6DPl1kO5xj_pn7-ICdRuYpldA"
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  })

  return result;
}

const upload = multer({storage});

module.exports = {upload, imageUploadUtil}





