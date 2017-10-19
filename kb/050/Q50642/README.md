---
layout: page
title: "Q50642: Mhelp Function Is Always Assigned to SHIFT+F1"
permalink: /kb/050/Q50642/
---

## Q50642: Mhelp Function Is Always Assigned to SHIFT+F1

	Article: Q50642
	Product(s): See article
	Version(s): 1.02   | 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 17-JUL-1990
	
	In the Microsoft Editor (M) Version 1.02, the mhelp function is like
	any other function that can be assigned to any key. However, mhelp is
	always assigned to SHIFT+F1 unless this key is unassigned using the
	unassigned keyword in the m-mhelp block of the TOOLS.INI file.
	
	It is perfectly acceptable to assign the mhelp to any key, and it will
	work properly with that keystroke. However, in addition to the newly
	assigned key, the mhelp function is always assigned to SHIFT+F1. This
	assignment can be taken out by placing the following line in the
	[M-MHELP] section of the TOOLS.INI file:
	
	   [M-MHELP]
	   unassigned:shift+f1
