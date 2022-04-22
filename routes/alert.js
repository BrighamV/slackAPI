const Axios = require('axios');
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {


    await Axios.post(
        `https://hooks.slack.com/services/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`,
        {
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: 'Good job at making a slackbot here is your <https://www.youtube.com/watch?v=dQw4w9WgXcQ| reward!> ',
                    }
                }
            ]
        }
    )

    res.json({
        date: new Date().toISOString(),
    })
    // res.render('index', { title: 'Express' });

});

module.exports = router;
