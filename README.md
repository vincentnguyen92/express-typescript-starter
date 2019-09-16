# Express - Typesript - TypeORM starter kit

This is a straightforward boilerplate for building REST APIs with Typescript, TypeORM and Express.

## How to use

```sh
# Clone it
git clone git@github.com:vincentnguyen92/express-typescript-starter.git
cd express-typescript-starter

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm run start
```
Docker Support
------
```sh
cd express-typescript-starter

# Build your docker
docker build -t express-starter .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# Run your docker
docker run -p 8080:8080 -v /$(pwd)/:/usr/src/app express-starter
```