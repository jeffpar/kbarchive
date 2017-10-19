---
layout: page
title: "Q51324: Searching in the M Editor with Regular Expressions"
permalink: /kb/051/Q51324/
---

## Q51324: Searching in the M Editor with Regular Expressions

	Article: Q51324
	Product(s): See article
	Version(s): 1.00 1.02 | 1.00 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 30-NOV-1989
	
	Question:
	
	When using the M Editor, every time I execute a search command using a
	Regular Expression, the editor takes the command literally and doesn't
	recognize the textarg as a Regular Expression. How can I get this
	search to work?
	
	Response:
	
	The correct method is as follows:
	
	      arg arg textarg <search_function>
	
	              arg -> ALT+A
	          textarg -> A Regular Expression (i.e., ^S[te].*end)
	<search_function> -> Psearch, Msearch, Replace, Qreplace
	
	For more information, see Chapter 5, Pages 51-63, in the "Microsoft
	FORTRAN Microsoft Editor User's Guide."
