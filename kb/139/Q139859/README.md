---
layout: page
title: "Q139859: Video for Windows Screen Capture Displays Wrong Mouse Pointer"
permalink: /kb/139/Q139859/
---

## Q139859: Video for Windows Screen Capture Displays Wrong Mouse Pointer

{% raw %}

	Article: Q139859
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.1,95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Screen Capture tool included with Video for Windows on a
	computer running Windows 95, captured mouse pointers are recorded and displayed
	as an hourglass instead of the mouse pointer being used by Windows 95.
	
	CAUSE
	=====
	
	The Screen Capture tool detects the Windows cursor type and then tries to match
	it to an internal generic cursor. Earlier versions of the 16-bit driver
	(Scrncap.drv) do not perform this function correctly.
	
	Additional query words: vfw
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbVideoSearch kbZNotKeyword3 kbVideo110
	Version           : :1.1,95
	
	=============================================================================
	

{% endraw %}
