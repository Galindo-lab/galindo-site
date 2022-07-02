
publish:
	emacs -Q --script publish.el
	find . -name "*.html~" -type f
	find . -name "*.html~" -type f -delete

upload:
	neocities push ./static/

