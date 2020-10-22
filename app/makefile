port := 9001

dev:
	npx webpack
	php -S localhost:$(port) 
py:
	python3 -m http.server $(port) 
php:
	open http://localhost:$(port)/html/
	php -S localhost:$(port) 
	
install-sass-loader:
	npm install sass-loader sass webpack --save-dev
install-css-loader:
	npm install css-loader style-loader --save-dev
install-url-loader:
	npm install svg-url-loader --save-devç
install-file-loader:
	npm install --save-dev file-loader