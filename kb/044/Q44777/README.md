---
layout: page
title: "Q44777: NMAKE Uses &quot;makefile &quot; Ignoring File Name on Command Line"
permalink: /kb/044/Q44777/
---

## Q44777: NMAKE Uses &quot;makefile &quot; Ignoring File Name on Command Line

	Article: Q44777
	Product(s): See article
	Version(s): 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickC | mspl13_basic
	Last Modified: 10-NOV-1989
	
	When using NMAKE, you normally put the makefile's name on the command
	line as follows:
	
	   NMAKE test.mak
	
	Although this works correctly for most cases, if there is a file named
	"makefile." in the current working directory, NMAKE uses that file
	instead of the one specified on the command line.
	
	To be sure NMAKE uses the makefile specified on the command line, you
	must have a /F switch before the makefile name as follows:
	
	   NMAKE /F test.mak
	
	This is expected behavior, as documented on Page 156 of the "Microsoft
	QuickC ToolKit" manual for QuickC Version 2.00.
