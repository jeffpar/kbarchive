---
layout: page
title: "Q109598: PRB: Using INKEY() in FoxPro for Mac Seems to Hang System"
permalink: /kb/109/Q109598/
---

## Q109598: PRB: Using INKEY() in FoxPro for Mac Seems to Hang System

	Article: Q109598
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the INKEY() function is issued in a full-screen application (the Apple
	Finder does not appear in the background), there is no way to return to the
	Finder or to switch applications until a key is pressed. The machine appears to
	be hung.
	
	RESOLUTION
	==========
	
	If any part of the Finder or another application is visible in the background,
	you can click on this area to activate it. Otherwise, you must press a key
	before any other action can occur.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following commands in the Command window:
	
	
	     ZOOM WINDOW SCREEN MAX
	     =INKEY(0)
	
	
	Note that mouse clicks are no longer recognized and the application menu is not
	available, preventing you from switching to another application.
	
	Additional query words: VFoxMac FoxMac lock up halt
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
