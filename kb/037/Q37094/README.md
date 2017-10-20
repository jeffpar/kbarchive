---
layout: page
title: "Q37094: WIDTH Clears the Screen When Setting EGA 43-Line Mode"
permalink: /kb/037/Q37094/
---

## Q37094: WIDTH Clears the Screen When Setting EGA 43-Line Mode

{% raw %}

	Article: Q37094
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 14-DEC-1989
	
	The WIDTH statement blanks the screen when the following command is
	executed in an EGA screen mode (such as SCREEN 9):
	
	   WIDTH 80,43
	
	The screen clears because the information that was stored in the
	previous 25-line (default) screen is no longer in a valid format to be
	redisplayed in EGA 43-line mode.
	
	This information applies to Microsoft QuickBASIC Versions 4.00, 4.00b,
	and 4.50 for MS-DOS, to Microsoft BASIC Compiler Versions 6.00 and
	6.00b for MS-DOS, and to Microsoft BASIC PDS (Professional Development
	System) Version 7.00 for MS-DOS.

{% endraw %}
