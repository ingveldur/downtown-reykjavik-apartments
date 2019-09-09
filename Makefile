clean:
	echo "Cleanup before build"
	rm -rf dist/
	rm -rf node_modules/
bootstrap:
	echo "Installing dependencies"
	npm install
generate:
	echo "Generating release artifact"
	npm run generate

release: clean bootstrap generate