import User from "../models/User.js";

export const getRecommendations = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const allUsers = await User.find({
      _id: { $ne: currentUser._id },
    });

    const matches = allUsers
      .map((u) => {
        const shared = u.interests.filter((item) =>
          currentUser.interests.includes(item)
        );

        if (shared.length > 0) {
          return {
            _id: u._id,
            username: u.username,
            interests: u.interests,
            sharedInterests: shared,
          };
        }
        return null;
      })
      .filter((u) => u !== null);

    console.log("MATCHES:", matches);
    res.json({ matches });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
