run: update-config copy-paella-build
	wzrd index.js

update-config:
	node tools/update-harness-config.js

copy-paella-build:
	node tools/copy-paella-build.js
