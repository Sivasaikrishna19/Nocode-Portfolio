const express = require('express');
const profileService = require('../services/profileService'); // Adjust the path as needed
const router = express.Router();



router.post('/create', async (req, res) => {
    console.log('success')
  try {
    const result = await profileService.createProfile(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error occurred while creating the todo.');
  }
});

router.get('/', async (req, res) => {

  try {
    const profiles = await profileService.getAllProfiles(req.query);
    res.send(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while fetching todos.');
  }
});

router.get('/:id', async (req, res) => {
    try {
      const profile = await profileService.getProfileById(req.params.id);
      res.send(profile);
    } catch (error) {
      console.error('Error occurred while fetching the profile:', error);
      res.status(500).send('Error occurred while fetching the profile.');
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await profileService.deleteProfile(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error occurred while deleting the todo:', error);
    res.status(500).send('Error occurred while deleting the todo.');
  }
});

module.exports = router;
