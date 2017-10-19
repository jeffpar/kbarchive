---
layout: page
title: "Q42668: &quot;Statement Illegal in TYPE Block&quot; Using F7 in QB.EXE Debug"
permalink: /kb/042/Q42668/
---

## Q42668: &quot;Statement Illegal in TYPE Block&quot; Using F7 in QB.EXE Debug

	Article: Q42668
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S890309-14 B_BasicCom | mspl13_basic
	Last Modified: 15-DEC-1989
	
	The following information applies to QuickBASIC Versions 4.00, 4.00b,
	and 4.50, to the QB.EXE programs supplied with Microsoft BASIC
	Compiler Versions 6.00 and 6.00b for MS-DOS and OS/2, and to the
	QBX.EXE environment supplied with the BASIC PDS Version 7.00 for
	MS-DOS and MS OS/2.
	
	The F7 function in the QB.EXE editor/debugger causes the program to
	execute up to the current location of the cursor. If you attempt to
	execute a program using F7 while the cursor is inside a user-defined
	TYPE...END TYPE block, the error message "Statement illegal in TYPE
	block" is returned. This only happens the first time that the program
	is executed.
	
	Code Example
	------------
	
	TYPE USER
	   ANYDATA AS INTEGER
	END TYPE
	CLS
