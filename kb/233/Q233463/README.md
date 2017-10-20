---
layout: page
title: "Q233463: MSBP: Unexpected Behavior When You Press and Hold Down CTRL+C"
permalink: /kb/233/Q233463/
---

## Q233463: MSBP: Unexpected Behavior When You Press and Hold Down CTRL+C

{% raw %}

	Article: Q233463
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbui kbimu
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press and hold down the CTRL+C key combination for longer than 30
	seconds in Microsoft Business Planner, you may experience one or more of the
	following symptoms:
	
	- Text may be truncated or be displayed in an unexpected font.
	
	- Text or graphic elements may not be displayed on the screen.
	
	- Commands may not be displayed on menus.
	
	- A blank dialog box that contains only an OK button may appear on the screen.
	
	- You may receive an error message on a blue screen.
	
	CAUSE
	=====
	
	This behavior can occur if you press and hold down CTRL+C on a page that
	contains bitmap data. This operation drains system resources.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit and then restart Business Planner.
	
	To prevent this issue from occurring, press but do not hold down CTRL+C when you
	want to copy text or graphics to the clipboard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Business Planner.
	
	MORE INFORMATION
	================
	
	When you press and hold down CTRL+C on a page that contains bitmap data, you
	continue to drain system resources. If you press and hold down CTRL+C for more
	than 30 seconds, you can reduce system resources to 0%.
	
	Additional query words: msbp empty cut off disappears missing
	
	======================================================================
	Keywords          : kbdisplay kbui kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
