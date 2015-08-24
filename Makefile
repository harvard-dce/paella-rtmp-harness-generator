run: copy-paella-build
	cd web-staging && python -m SimpleHTTPServer

update-config:
	node tools/update-harness-config.js

copy-paella-build:
	node tools/copy-paella-build.js
