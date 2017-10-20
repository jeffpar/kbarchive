---
layout: page
title: "Q130341: Twilight Zone Screen Saver Causes GP Fault"
permalink: /kb/130/Q130341/
---

## Q130341: Twilight Zone Screen Saver Causes GP Fault

{% raw %}

	Article: Q130341
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Twilight Zone screen saver from Sound Source Interactive,
	you may receive the following error message when the screen saver activates:
	
	  An error has occurred in your program and it will be terminated. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button, you see the following information:
	
	  IMAGECAR caused a general protection fault in module DECO.DLL at
	  0006:00004692.
	
	CAUSE
	=====
	
	The screen saver is using an outdated DECO.DLL file.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain an updated DECO.DLL file. An updated DECO.DLL
	file (dated 8/18/94, with a size of 139,264 bytes) is available on the Iterated
	Systems BBS at (401) 767-3931 as a file named TZONE.ZIP.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
