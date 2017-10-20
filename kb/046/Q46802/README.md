---
layout: page
title: "Q46802: QUICK.INI Needs Modification for Use with M 1.02 or MEP 1.02"
permalink: /kb/046/Q46802/
---

## Q46802: QUICK.INI Needs Modification for Use with M 1.02 or MEP 1.02

{% raw %}

	Article: Q46802
	Product(s): See article
	Version(s): 1.02   | 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 28-JUL-1989
	
	To use the QUICK.INI file provided with the Microsoft M Editor Version
	1.02 as the TOOLS.INI file, it is necessary to make two modifications
	to the file. Without the modifications the editor gives the following
	error messages:
	
	   Argcompile is not an editor function               press any key...
	   Help is not an editor function                     press any key...
	
	To get past the Argcompile error message, add the following line to
	the TOOLS.INI file before the Argcompile:F5 line:
	
	   Argcompile:=arg compile
	
	The Argcompile macro is also defined in the TOOLS.PRE file provided
	with the editor. The Help:F1 line is a leftover from previous versions
	of the editor and is not implemented in this version. To eliminate the
	Help error message, either delete or comment out the Help:F1 line.

{% endraw %}
