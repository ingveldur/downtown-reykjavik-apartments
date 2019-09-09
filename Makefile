clean:
	echo "Cleanup before build"
	rm -rf dist/
bootstrap:
	echo "Installing dependencies"
	npm install
generate:
	echo "Generating release artifact"
	npm run generate

release:
	make clean
	make bootstrap
	make generate