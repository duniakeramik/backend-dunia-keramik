import axios from "axios";

export const createWeb = async (req, res) => {
  const {
    name,
    url,
    primaryColor,
    secondaryColor,
    thirdColor,
    instagramUrl,
    facebookUrl,
  } = req.body;
  try {
    axios.post(
      "https://api.netlify.com/api/v1/sites",
      {
        name: url,
        repo: {
          provider: "github",
          id: 489160465,
          repo: "duniakeramik/website-mitra",
          private: false,
          branch: "main",
          cmd: "npm run build",
          dir: "build",
          deploy_key_id: "6274c46c3616f82aa2c2cd1a",
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
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
        },
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
