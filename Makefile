run:
	wzrd index.js

test:
	node tests/basictests.js

update-config:
	node tools/update-harness-config.js

copy-paella-build:
	node tools/copy-paella-build.js