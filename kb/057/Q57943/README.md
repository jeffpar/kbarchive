---
layout: page
title: "Q57943: No Symbolic Information Generated for Pascal Units"
permalink: /kb/057/Q57943/
---

## Q57943: No Symbolic Information Generated for Pascal Units

	Article: Q57943
	Product(s): See article
	Version(s): 2.10 2.20 2.30 | 2.20 2.30
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_pascal | mspl13_basic
	Last Modified: 8-MAR-1990
	
	The Microsoft Pascal Compiler Version 4.00 does not generate symbolic
	debugging information for Pascal units. As a result, when tracing
	through a Pascal program unit, any attempt to access local variables
	by using trace/watchpoints, dumps, examines, etc. yields a "symbol
	unknown" error.
	
	The only workaround is to transform the program units into modules.
