---
layout: page
title: "Q61223: C 6.00 README: Don't Use CTRL+BREAK When Debug History On"
permalink: /kb/061/Q61223/
---

## Q61223: C 6.00 README: Don't Use CTRL+BREAK When Debug History On

{% raw %}

	Article: Q61223
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 25-APR-1990
	
	The following information is taken from the C Version 6.00 README.DOC file.
	
	Don't Press CTRL+BREAK When Debug History On Under OS/2
	-------------------------------------------------------
	
	- Pressing CTRL+BREAK to end a debugging session while recording debug
	  history in OS/2 can result in a corruption of the files used to
	  record debug history. Turn off debug history before ending a
	  debugging session with CTRL+BREAK.
	
	  If you do press CTRL+BREAK while debug history is on, do not try to
	  reuse the files containing the debug history information (.CVH or
	  .CVI files).

{% endraw %}
