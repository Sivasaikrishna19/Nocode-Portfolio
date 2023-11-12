const Profile = require('../models/profile');

// Create a new profile
const createProfile = async (profileData) => {
  try {
    const profile= new Profile(profileData);
    const result = await profile.save();
    return result;
  } catch (error) {
    throw error;
  }
};

// Get all Profiles
const getAllProfiles = async (params) => {
    try {
      const profiles = await Profile.find(query);
      return profiles;
    } catch (error) {
      throw error;
    }
  };
  
// Get a profile by ID
const getProfileById = async (profileId) => {
    try {
      const profile = await Profile.findById(profileId);
      if (!profile) {
        throw new Error('Profile not found.');
      }
      return profile;
    } catch (error) {
      throw error;
    }
  };

// Delete a profile by ID
const deleteProfile = async (profileId) => {
  try {
    const deletedProfile = await Profile.findOneAndDelete({ _id: profileId });
    if (!deletedProfile) {
      throw new Error('Profile not found.');
    }
    return 'Profile deleted successfully.';
  } catch (error) {
    throw error;
  }
};

module.exports = { createProfile, getAllProfiles, getProfileById, deleteProfile };
