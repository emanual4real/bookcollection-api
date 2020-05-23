import express from 'express';
import logger from '../services/logger';
import {register, deleteUser} from '../services/users';

const router = express.Router();

// register
  router.post('/registration', async (req, res, next) => {
    logger.info('POST /users/registration')
    try {
      const { body } = req;
      let user = await register(body)
      res.status(200).send(user)
    } catch(err) {
      logger.error('POST /users/registration', err)
      res.status(500).send(err);
    }
    next()
  });

// LOGIN
router.post('/login', (req, res, next) => {
  res.send('you just logged in');
})


// Delete one book
router.delete('/registration', async (req, res, next) => {
  logger.info('DELETE /users/registration')
  try {
    const {body} = req;
    const {_id} = body;
    let result = await deleteUser(_id);
    res.status(200).send(result)
  } catch(err) {
    logger.error('DELETE /users/registration', err)
    res.status(500).send(err);
  }
  next()

});

module.exports = router;
