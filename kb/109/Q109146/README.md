---
layout: page
title: "Q109146: How to Use Outshow with FoxPro for Macintosh"
permalink: /kb/109/Q109146/
---

## Q109146: How to Use Outshow with FoxPro for Macintosh

	Article: Q109146
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
	
	SUMMARY
	=======
	
	On the Macintosh platform, the term "outshow" means to momentarily hide all the
	windows that are currently displayed in front of the active output window.
	FoxPro for Macintosh supports the outshow feature.
	
	MORE INFORMATION
	================
	
	Outshow is enabled or disabled by placing the appropriate line in the CONFIG.FPM
	file. By default, outshow is enabled.
	
	To turn off outshow, add the following line to the CONFIG.FPM file:
	
	  OUTSHOW=OFF
	
	To turn on outshow, add the following line to the CONFIG.FPM file:
	
	  OUTSHOW=ON
	
	This setting can be changed only through the CONFIG.FPM file at FoxPro launch
	time and cannot be changed programmatically during the FoxPro session.
	
	To activate the outshow feature while FoxPro is the active application, press the
	SHIFT+COMMAND+CTRL+OPTION key combination.
	
	To demonstrate this feature, press the SHIFT+COMMAND+CTRL+OPTION key combination
	while the Command window is in front of the FoxPro desktop. The Command window
	will disappear and the FoxPro desktop will be the foremost window until you
	release the keys.
	
	Additional query words: vFoxMac FoxMac hide windows front wontop woutput
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
