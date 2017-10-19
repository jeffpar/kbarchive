---
layout: page
title: "Q32053: Scrolling One Line at a Time"
permalink: /kb/032/Q32053/
---

## Q32053: Scrolling One Line at a Time

	Article: Q32053
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist1.00 | mspl13_basic
	Last Modified: 20-OCT-1988
	
	Problem:
	
	The editor jumps seven lines at a time when I Scroll off the top or
	bottom of the screen. I want it to Scroll one line at a time, but it
	Scrolls four lines at a time when I set VSCROLL to 1.
	
	Response:
	
	Hike and Scroll are designed to be independent functions; however,
	they are incorrectly tied together.
	
	Microsoft has confirmed this to be a problem in Version 1.00 of the
	editor. We are researching this problem and will post new information
	as it becomes available.
	
	A workaround to this problem is to set both VSCROLL and HIKE to 1 in
	your TOOLS.INI file in the [M] section, as in the following example:
	
	[M]
	    hike:1
	    vscroll:1
