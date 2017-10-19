---
layout: page
title: "Q64181: _getlogcoord() Now _getviewcoord() in Microsoft C 6.00"
permalink: /kb/064/Q64181/
---

## Q64181: _getlogcoord() Now _getviewcoord() in Microsoft C 6.00

	Article: Q64181
	Product(s): See article
	Version(s): 6.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 31-JUL-1990
	
	The _getlogcoord() function from Microsoft C version 5.10's graphics
	library was replaced by the _getviewcoord() function in version 6.00.
	
	The _getviewcoord() family of functions adds additional functionality
	to the original routine supporting window coordinate translation, in
	addition to the standard logical coordinate translation. This is one
	reason the name was changed between versions.
