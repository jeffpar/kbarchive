---
layout: page
title: "Q61207: C 6.00 README: Building PM Applications in PWB"
permalink: /kb/061/Q61207/
---

## Q61207: C 6.00 README: Building PM Applications in PWB

{% raw %}

	Article: Q61207
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-AUG-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	Building Presentation Manager Applications in PWB
	-------------------------------------------------
	
	The Presentation Manager build options in PWB assume that functions in
	your program use the _loadds attribute in the functions that require
	it and that exported functions are identified with the _export
	keyword.
	
	If your program does not identify exported and/or _loadds functions in
	the function header, you need to do two things to build the program
	successfully under PWB. First, select the Windows Entry/Exit Codes
	check box in the C Compiler Options dialog box. This is the equivalent
	of specifying /Gw on the command line.
	
	Second, make sure the exported function names in your .DEF file are
	all in uppercase so that they can be found correctly at link time. You
	can also build the program successfully by disabling the No Ignore
	Case option in the Link Options dialog box, but this is not
	recommended.
	
	In particular, you will have the problems described here if you use
	PWB to build the example programs in Charles Petzold's book
	"Programming the OS/2 Presentation Manager." Programs built using the
	makefiles provided in the book will run correctly, but programs built
	from within PWB must follow the instructions specified above.

{% endraw %}
