# Built from [vue-argon](https://www.creative-tim.com/product/vue-argon-design-system)
# Guess-That-Photo using [vue-flashcards](https://github.com/cuduy197/vue-flashcard)

# heroku deploy
heroku plugins:install heroku-cli-static
heroku apps:create celebrateourweddingwithus
heroku buildpacks:add heroku/nodejs -a celebrateourweddingwithus
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static -a celebrateourweddingwithus
heroku config:set NODE_ENV=production -a celebrateourweddingwithus
#npm install webpack-assets-manifest --save-dev
