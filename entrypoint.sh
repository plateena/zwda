#!/bin/sh

# Run npm install
npm install

# Execute the CMD from Dockerfile
exec "$@"
