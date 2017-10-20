---
layout: page
title: "Q119938: BUG: Menu Appears Behind Fox Icon on Menu Bar"
permalink: /kb/119/Q119938/
---

## Q119938: BUG: Menu Appears Behind Fox Icon on Menu Bar

{% raw %}

	Article: Q119938
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-defined menu on the menu bar in FoxPro for Macintosh extends past the
	right edge of the screen.
	
	CAUSE
	=====
	
	The Macintosh System software treats both the menu bar and the desktop as the
	visible portion of a larger area. In other words, the menu appears, but just not
	in the visible portion of the viewing area.
	
	RESOLUTION
	==========
	
	Shorten the names of the menu pads in order to bring all the options into the
	viewable area of the monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a quick menu.
	
	2. Add six new pads at the bottom of the definition with names such as
	  Longoption1, Longoption2, and so on.
	
	3. Click the Try It push button.
	
	Note that the end of Longoption5 is behind the Fox icon and Longoption6 is not
	even visible.
	
	NOTE: This information does NOT apply to FoxPro for Windows or FoxPro for MS-DOS.
	FoxPro for MS-DOS will allow you to scroll a long menu. FoxPro for Windows will
	wrap the menu to a second line.
	
	Additional query words: VFoxMac FoxMac buglist2.50b buglist2.50c buglist3.00b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	

{% endraw %}
