---
layout: page
title: "Q45903: chdir() Description Incorrect in Manual and On-Line Help"
permalink: /kb/045/Q45903/
---

## Q45903: chdir() Description Incorrect in Manual and On-Line Help

	Article: Q45903
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 26-JUN-1989
	
	The description of the chdir() function provided with the Microsoft
	QuickC Compiler Version 2.00 is incorrect in the "Run-Time Library
	Reference" manual on Page 156 and in the QuickC Advisor (on-line
	help). In both cases the example call in the description section
	should read as follows:
	
	   chdir("c:\\temp");
	
	The sample call in the description section of the on-line help reads
	as follows:
	
	   chdir("c:\temp")
	
	It needs an additional backslash "\". To see this error, use the
	Help.Index menu selection, then choose the chdir() function, and
	change to the description section.
	
	The sample call in the manual reads as follows:
	
	   chdir(c:\temp);
	
	This description needs another backslash (\) and quotes around the
	directory.
