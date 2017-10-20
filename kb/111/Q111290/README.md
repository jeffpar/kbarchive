---
layout: page
title: "Q111290: PRB: Pink System Highlight Causes FoxPro for Mac to Turn Pink"
permalink: /kb/111/Q111290/
---

## Q111290: PRB: Pink System Highlight Causes FoxPro for Mac to Turn Pink

{% raw %}

	Article: Q111290
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Macintosh is set to display 16 colors and the highlight is the color pink,
	FoxPro for Macintosh's desktop, status bar, and other gray areas will turn pink
	also.
	
	CAUSE
	=====
	
	This problem is caused by Apple's color remapping. Other programs that use a
	similar shade of gray will exhibit the same problems.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Load Microsoft FoxPro for Macintosh.
	
	2. To change the number of colors to display, open the Control Panel,
	  double-click Monitors, and choose the 16 Colors option.
	
	3. To change the color of the highlight, double-click Color in the Control Panel
	  and choose "Pink" as the highlight color. Note that the FoxPro desktop colors
	  change from gray to pink. If you choose any color other than "Pink", FoxPro's
	  desktop remains gray (the default).
	
	Additional query words: FoxMac vfoxmac 3.00 grey display video
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
