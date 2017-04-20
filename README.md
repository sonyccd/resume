# Resume

[![Build Status](https://travis-ci.org/sonyccd/resume.svg?branch=master)](https://travis-ci.org/sonyccd/resume)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c97bb7af2b6e4a449825a9fe307488db)](https://www.codacy.com/app/bwbaze/resume?utm_source=github.com&utm_medium=referral&utm_content=sonyccd/resume&utm_campaign=badger)
[![Dependencies](https://david-dm.org/sonyccd/resume.svg)](https://david-dm.org/sonyccd/resume)
[![Known Vulnerabilities](https://snyk.io/test/github/sonyccd/resume/badge.svg)](https://snyk.io/test/github/sonyccd/resume)

This is a simple jekyll theme for a nice resume. It is created from the sinlge config.yml file. It will also generate a PDF (still new feature and it does not format well) with a click of the button on the bottom. I made this because I needed a better resume and did not want to type one. Feel free to use this!

## Getting started
This is a jekyll site so it runs in github as is.

1. Fork or clone this repo
2. Edit the _config.yml file. You can edit every part of the resume in there.
3. Set that master branch to be your github site.
4. Get an awesome job!

## Making edits
This is a gulp node.js project so you will need to go a little bit more to make major edits.

1. You will need to install node.js on your computer. 
2. Once that is installed just run ```npm install``` and that will get all of the needed packages installed.
3. After that you will need to install jekyll. I recommend using a environment manager such as [rbenv](https://github.com/rbenv/rbenv).
4. Now install jekyll by following these instruction [here](https://jekyllrb.com/docs/installation/)
5. Once everything is installed you need to build the site. To do this run ```gulp```. This will also start the local server and open a browser window for it.

Credit to [online-cv](https://github.com/sharu725/online-cv) for the original styles!
