const express = require('express');
const router = express.Router();
const axios = require('axios');
const uuidv4 = require('uuid/v4');

// Get titles from request body and query API for each title's details
router.post('/',
    async (req, res) => {
        try {
            const titles = (req.body.titles);
            const url = `${process.env.MOVIES_BASE_URL}${process.env.MOVIES_API_KEY}`;
            const movies = await Promise.all(titles.map(t => axios.get(`${url}&t="${t}"`)));
            const parsedMovies = movies.map(m => {
                const { Title, Year, Runtime, Genre, Director } = m.data;
                const movieObj = {
                    id: uuidv4(),
                    title: convertToTitleCase(Title),
                    year: Year,
                    runtime: Runtime,
                    genre: Genre,
                    director: Director
                }
                return movieObj;
            });
            res.json(parsedMovies);
        }
        catch (err) { throw err; }
    });

const convertToTitleCase = title => {
    const casedTitle = title
        .toLowerCase()
        .split(' ')
        .map(part => part
            .replace(part[0], part[0].toUpperCase())
            .replace(/[^0-9a-z]/gi, '')
        )
        .join(' ');
    return casedTitle;
}

module.exports = router;