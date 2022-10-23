// const cloudinary = require("../middleware/cloudinary");
// const Post = require("../models/Post");
// const CommentController = require('./comment')
const Recipe = require("../models/Recipe")

module.exports = {
//   getProfile: async (req, res) => {
//     try {
//       const posts = await Post.find({ user: req.user.id });
//       res.render("profile.ejs", { posts: posts, user: req.user});
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getFeed: async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: "desc" }).lean();
//       res.render("feed.ejs", { posts: posts });
//     } catch (err) {
//       console.log(err);
//     }
//   },
  getRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id); 
    //   const comments = await CommentController.getComments(req, res)
    //   res.render("post.ejs", { post: post, user: req.user, comments: comments });
    res.send(recipe)
    } catch (err) {
      console.log(err);
    }
  },
  createRecipe: async (req, res) => {
    try {
      // Upload image to cloudinary
    //   const result = await cloudinary.uploader.upload(req.file.path);

      await Recipe.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        mealtime: req.body.mealtime,
        user: req.user.id,
      });
      console.log("Recipe has been added!");
    //   res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  deleteRecipe: async (req, res) => {
    try {
      // Find post by id
      let recipe = await Recipe.findById({ _id: req.params.id });
      // Delete image from cloudinary
    //   await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Recipe.remove({ _id: req.params.id });
      console.log("Deleted Recipe");
    //   res.redirect("/profile");
    } catch (err) {
    //   res.redirect("/profile");
    console.log(err)
    }
  },
};
