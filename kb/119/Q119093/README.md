---
layout: page
title: "Q119093: Criteria for Determining When the Task Bar Is Hidden"
permalink: /kb/119/Q119093/
---

## Q119093: Criteria for Determining When the Task Bar Is Hidden

{% raw %}

	Article: Q119093
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the criteria Windows 95 uses to determine whether or not
	the task bar is hidden when a window becomes full screen.
	
	MORE INFORMATION
	================
	
	The criteria are as follows:
	
	- The window is not a tool window.
	
	- The window is either not maximized, or it is maximized but doesn't have a
	  caption.
	
	- The window is being sized such that it covers the entire work area.
	
	- The window is being sized such that one or more sides extend outside the work
	  area.
	
	If all four conditions are met, a state bit is set on that window. Then, whenever
	a window with that state bit (or a window that is owned by a window with that
	state bit) is activated, the task bar is hidden to allow the full-screen window
	to be displayed.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
