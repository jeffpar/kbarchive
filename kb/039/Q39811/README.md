---
layout: page
title: "Q39811: No Symbolic Information Generated for Pascal Units"
permalink: /kb/039/Q39811/
---

## Q39811: No Symbolic Information Generated for Pascal Units

	Article: Q39811
	Product(s): See article
	Version(s): 2.20   | 2.20
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_pascal | mspl13_basic
	Last Modified: 12-JAN-1989
	
	The Microsoft Pascal Compiler Version 4.00 generates no symbolic
	debugging information for Pascal Units. As a result, when tracing
	through a Pascal program Unit, attempting to access any local
	variables by using trace/watchpoints, dumps, examines, etc. yields a
	"symbol unknown" error.
	
	The only workaround is to transform the program Units into Modules.
