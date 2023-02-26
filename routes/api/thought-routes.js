
const router = require('express').Router();
const { Thought, Reaction} = require('../../models')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', (req,res)=> {
   Thought.find({}, (err, thoughts) => {
      if(err) {
         res.status(400).json(err);
      } else {
         res.status(200).json(thoughts)
      } 
   });

});

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', (req,res)=> {
   Thought.create(
      {
         thoughtText: req.body.thoughtText,
         username: req.body.username,
      },
      (err,thought) => {
         if(err) {
            res.status(400).json(err);
         } else {
            res.status(200).json(thought);
         }
      }
   );
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', (req,res)=> {
   Thought.findOne ({ _id: req.params.thoughtId}, (err, thought) => {
      if (err) {
         res.status(400).json(err);
      } else {
         res.status(200).json(thought);
      }
 }) .populate("reactions");

});

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/', (req,res)=> {
   Thought.findOneAndUpdate(
      {_id: req.params.thoughtId },
      {
         thoughtText: req.body.thoughtText,
         username: req.body.username,
      },
      (err, thought) => {
         if(err) {
            res.status(400).json(err);
         } else {
            res.status(200).json(thought);
         }
      }
   );

});

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', (req,res)=> {
   Thought.findOneAndDelete({ _id: req.params.thoughtId }, (err, thought) => {
   if (err) {
      res.status(400).json(err);
   } else {
      res.status(200).json(thought);
   }
   });
});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', (req,res)=> {});



//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {});


module.exports = router;
