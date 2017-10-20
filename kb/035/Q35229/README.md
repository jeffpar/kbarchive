---
layout: page
title: "Q35229: CPANEL May Crash if /S Switch Used Previously"
permalink: /kb/035/Q35229/
---

## Q35229: CPANEL May Crash if /S Switch Used Previously

{% raw %}

	Article: Q35229
	Product(s): See article
	Version(s): 6.x 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 19-SEP-1988
	
	If a value such as /s33 is passed to the mouse driver before invoking
	CPANEL, CPANEL may crash if you keep decrementing while in the CPANEL
	screen. The CPANEL will not be invoked and a divide overflow may
	occur, but the mouse driver remains intact.

{% endraw %}
