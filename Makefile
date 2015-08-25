run: copy-paella-build
	cp data/data-template.json web-staging/data.json
	cd web-staging && python -m SimpleHTTPServer

update-config:
	node tools/update-harness-config.js

copy-paella-build:
	node tools/copy-paella-build.js
