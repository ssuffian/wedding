
## Settings

- DNS: Namecheap
- Web Server: DigitalOcean

## favicon
- (source)[https://www.kissclipart.com/fist-icon-clipart-raised-fist-1968-olympics-black-jqp3ab/]
- (converter)[https://favicon.io/favicon-converter/]

## server
sudo apt install nginx

## password
sudo sh -c "echo -n 'wedding:' >> /etc/nginx/.htpasswd"
sudo sh -c "openssl passwd -apr1 >> /etc/nginx/.htpasswd"
wedding: celebrate

## letsencrypt
sudo certbox --nginx -d celebrateourweddingwith.us -d www.celebrateourweddingwith.us

## node
sudo npm install -g npm@latest
sudo npm install gulpjs/gulp-cli -g
npm install

## minimizing images

	sudo apt install jpegoptim
	jpegoptim --size 200k hero-min.jpg --overwrite

## png to svg to png

	# https://www.vectorizer.io/ to convert initial PNG to svg
	inkscape -z -e test.png -w 1024 -h 1024 test.svg


## RSVP Setup

- https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server