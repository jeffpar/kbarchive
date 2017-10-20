---
layout: page
title: "Q61611: CodeView Does Not Reset Initial Graphics Mode on Exit"
permalink: /kb/061/Q61611/
---

## Q61611: CodeView Does Not Reset Initial Graphics Mode on Exit

{% raw %}

	Article: Q61611
	Product(s): See article
	Version(s): 2.x 3.00    | 2.x 3.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 29-MAY-1990
	
	When CodeView exits, it leaves the screen in the current video mode
	and does not reset the mode to the mode that was active when CodeView
	was initially loaded.
	
	This behavior is by design. However, if you start CodeView with the /s
	option to enable screen swapping, the video mode that was active when
	CodeView was loaded will be reset because CodeView has separate
	swappable video memory pages to hold the output screen as well as the
	CodeView screen.

{% endraw %}
