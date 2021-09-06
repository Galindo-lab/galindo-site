
upload:
	find . -type f -iname \*.tex -delete
	find . -type f -iname \*.log -delete
	find . -type f -iname \*.texi -delete
	cp -R ./apuntes/img/* ./publish/apuntes/img
	neocities push ./publish/

clean:
	find . -type f -iname \*.tex -delete
	find . -type f -iname \*.log -delete
	find . -type f -iname \*.texi -delete

update:
	cp -R ./apuntes/img/* ./publish/apuntes/img
