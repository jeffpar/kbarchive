---
layout: page
title: "Q44797: &quot;Error Loading - Invalid Format,&quot; MOUSE.LIB in Quick Library"
permalink: /kb/044/Q44797/
---

## Q44797: &quot;Error Loading - Invalid Format,&quot; MOUSE.LIB in Quick Library

	Article: Q44797
	Product(s): See article
	Version(s): 4.00 4.00b
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 13-DEC-1989
	
	When creating a Quick library using the MOUSE.LIB library (from the
	"Microsoft Mouse Programmer's Reference Guide") for use with
	QuickBASIC 4.00 or 4.00b or BASIC compiler 6.00 or 6.00b, you must
	place another object module or library before MOUSE.LIB in the Quick
	library. This can be accomplished using any other object module or
	library and the following LINK syntax:
	
	   LINK /Q otherlib+MOUSE.LIB, MOUSE.QLB,, BQLB40.LIB
	
	If MOUSE.LIB is the first (or only) element in the Quick library,
	trying to load the Quick library into QuickBASIC 4.00 or 4.00b or
	BASIC compiler 6.00 or 6.00b (with QB /L Mouse.QLB) results in an
	"Error loading file - invalid format" error message. This problem does
	not occur in QuickBASIC 4.50 or BASIC PDS 7.00.
