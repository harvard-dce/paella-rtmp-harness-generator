run: copy-paella-build build-data-json
	cd web-staging && python -m SimpleHTTPServer

update-config:
	node tools/update-harness-config.js

copy-paella-build:
	node tools/copy-paella-build.js

build-data-json:
	node tools/build-data-json.js
