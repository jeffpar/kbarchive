---
layout: page
title: "Q50496: The 37th Call Added to the Calls Menu Corrupts CodeView Screen"
permalink: /kb/050/Q50496/
---

## Q50496: The 37th Call Added to the Calls Menu Corrupts CodeView Screen

	Article: Q50496
	Product(s): See article
	Version(s): 2.20   | 2.20
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist2.20 fixlist2.30 | mspl13_basic
	Last Modified: 10-NOV-1989
	
	The CodeView Calls menu shows the current depth of function calls as
	well as the line number the routine was called from and the parameters
	passed. The current routine is always at the top and the routine from
	which the current routine was called is directly below.
	
	The routines in the Calls menu are first labeled 0-9, and if you are
	nested more than ten levels deep, CodeView labels the next 26 calls
	A-Z, for a display that can accept 36 levels of subroutine calls. If
	you exceed this limit and then select the Calls menu, the CodeView
	display becomes corrupted.
	
	If the display is corrupted in this manner, the Redraw ("@") dialog
	command can be used to restore the display to it's original state.
	
	The Stack Trace dialog command (K) has the same function as the Calls
	menu and correctly handles nesting of more than 36 levels deep.
	
	Microsoft has confirmed this to be a problem with CodeView Version
	2.20. This problem was corrected in Version 2.30.
