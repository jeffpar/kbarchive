---
layout: page
title: "Q59253: Help on ungetch Not Available from Help Topics List"
permalink: /kb/059/Q59253/
---

## Q59253: Help on ungetch Not Available from Help Topics List

{% raw %}

	Article: Q59253
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 15-MAY-1990
	
	Due to a misspelling, help is not available on the function "ungetch"
	by selecting the function from the Help.Topics List.
	
	To demonstrate the problem, select Run-Time Library from the Contents
	list. From the Run-Time Library, select I/O Console and Port. In the
	list of functions displayed, "ungetch" is misspelled as "ungecth";
	thus, no help is found for the function when the function name is
	selected and F1 is pressed for specific help.
	
	To work around the problem, there are two solutions:
	
	1. Type "ungetch" in the editor window and press F1. The help engine
	   will correctly find the information on the function.
	
	2. Using HELPMAKE.EXE, decode the QC.HLP file, correct the
	   misspelling, and encode it again with the change.

{% endraw %}
