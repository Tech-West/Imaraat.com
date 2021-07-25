const express = require("express");
const auth = require("../middlewares/Auth");
const Project = require("../models/Project");
const router = new express.Router();

//To add new project
router.post("/api/project", auth, async (req, res) => {
  const project = new Project({ user: req.user._id, ...req.body });
  try {
    await project.save();
    res.status(200).send({ project });
  } catch (error) {
    res.status(400).send(error);
  }
});

//To get the project
router.post("/api/project/:id", auth , async (req, res) => {
    try {
        const project = await Profile.findOne({ _id: req.params.id });
        if (!project) {
            return res.status(404).send();
        }
        res.status(200).send(project);
    } catch (err) {
        res.status(502).send({ err });
    }
})

//To get all the projects
router.get("/api/projects", auth, async (req, res) => {
    try {
      const projects = await Project.find({ user: req.user._id });
      await Project.populate(projects, "user");
      res.status(200).send(projects);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
//To add cover image URL in project
router.post("/api/projects/:id", auth, async (req, res) => {
  const { uid, coverImageUrl } = req.body;
  const projectID = req.params.id;
		try {
		const Project =	await Projects.updateOne(
				{
					$and: [{ uid }, { _id: projectID }],
				},
				{
					$set: {
						coverImageUrl
					},
				},
        res.status(200).send({Project})
			)
		} catch (error) {
			res.status(500).send({ error })
		}
});

//To add gallery image URL in project
router.post("/api/projects/:id", auth, async (req, res) => {
  const { uid, imageUrl } = req.body;
  const projectID = req.params.id;
		try {
			const Project = await Projects.update(
				{
					$and: [{ uid }, { _id: projectID }],
				},
        {
        $push: {
          gallery: { imageUrl: imageUrl }
          }
      }, 
      res.status(200).send({Project})
      )}
		catch (error) {
			res.status(500).send({ error })
		}
});
