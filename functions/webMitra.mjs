import axios from "axios";

export const createWeb = async (req, res) => {
  const {
    name,
    primaryColor,
    secondaryColor,
    thirdColor,
    instagramUrl,
    facebookUrl,
    noHP
  } = req.body;

  const opt = {
    method: "POST",
    url: " https://api.netlify.com/api/v1/sites",
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: {
      name,
      repo: {
        provider: "github",
        id: 489160465,
        repo: "duniakeramik/website-mitra",
        private: false,
        branch: "main",
        cmd: "npm run build",
        dir: "build",
        deploy_key_id: `${process.env.DEPLOY_KEY_ID}`,
      },
      build_settings: {
        env: {
          NODE_ENV: "production",
          REACT_APP_WEBSITE_NAME: name,
          REACT_APP_FACEBOOK_URL: facebookUrl,
          REACT_APP_INSTAGRAM_URL: instagramUrl,
          REACT_APP_PRIMARY_COLOR: primaryColor,
          REACT_APP_SECONDARY_COLOR: secondaryColor,
          REACT_APP_THIRD_COLOR: thirdColor,
          REACT_APP_WHATSSAPP: noHP
        },
      },
    },
  };

  try {
    await axios
      .request(opt)
      .then((response) => {
        return res.status(200).json({
          message: "Website created successfully",
          data: response.data,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: "Error creating website",
          data: error.response.data,
        });
      });
  } catch (err) {
    return res.status(500).json({
      message: "Error creating website",
      data: err,
    });
  }
};
