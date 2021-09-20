# Built from [vue-argon](https://www.creative-tim.com/product/vue-argon-design-system)
# Guess-That-Photo using [vue-flashcards](https://github.com/cuduy197/vue-flashcard)
# Deployment using [gh-pages script](https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg)

## Deploy
npm run gh-pages-deploy

### RSVP Form
This is the process happening for RSVP form. 

1) Fill out the name/email pairing in the RSVP Form sheet. 
2) Run the google app script to create forms for everyone.
3) Import the form result with all the Editable URLs into airtable
4) Access these editable URLs from the website.

If we need to update who is on the RSVP list, we will need to rerun the app script which will add new entries, and re-import the form.
