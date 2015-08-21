rtmp-harness-paella
===================

Lets you run an rtmp stream in any version of Paella. A straightforward way to check on RTMP playing.

Installation
------------

    npm install
    npm install wzrd -g

Usage
-----

    make run    

Respond to the prompts for RTMP streams and Paella location.

Then, you will see a message like this:

    server started at http://localhost:9966

You can open your browser to that and inspect Paella playing the RTMP stream.

How it works
------------

`make run`:

- Asks you where Paella is and what RTMP stream to play.
- Copies over built Paella files from your Paella project.
- Updates configuration files to play the RTMP file.
- Runs a local web server hosting a web page with your Paella in it.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
