import User from "../models/User.js";

export const updateInterests = async (req, res) => {
  try {
    const { interests } = req.body;

    if (!interests || !Array.isArray(interests)) {
      return res.status(400).json({ message: "Interests must be an array" });
    }

    await User.findByIdAndUpdate(req.user.id, { interests });

    res.json({ message: "Interests updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveInterests = async (req, res) => {
  const { interests } = req.body;

  await User.findByIdAndUpdate(req.user.id, {
    interests: interests,
  });

  res.json({ message: "Interests saved" });
};
