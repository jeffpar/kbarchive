---
layout: page
title: "Q32871: Write Function Will Not Work Correctly with SS!=DS"
permalink: /kb/032/Q32871/
---

## Q32871: Write Function Will Not Work Correctly with SS!=DS

	Article: Q32871
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 19-JUL-1988
	
	Problem:
	   I have a program that needs to be run in an SS!=DS environment and
	I am trying to use the write function; however, it does not seem to be
	working.
	
	Response:
	   The write function will not work correctly in SS!= DS in text
	mode. It should work properly in binary mode. In text mode, write()
	builds a buffer on the stack to do LF to CR/LF translation. It makes a
	call to stackavail() to make sure it does not overflow the stack; this
	call is what prevents it from working with SS!=DS.
	   This is program design for this product.
