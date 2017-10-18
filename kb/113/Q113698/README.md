---
layout: page
title: "Q113698: PRB: Command Window Moves Behind Main FoxPro Window"
permalink: kb/113/Q113698/
---

## Q113698: PRB: Command Window Moves Behind Main FoxPro Window

	Article: Q113698
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When MACDESKTOP = ON, clicking the main FoxPro window moves it in front of the
	Command window.
	
	CAUSE
	=====
	
	This behavior occurs because the Command window is not a part of the main FoxPro
	window as it is in both FoxPro for Windows and FoxPro for MS-DOS. Issuing the
	SET MACDESKTOP OFF command after FoxPro has started does not affect this
	relationship because the "desktop" state of the Command window is determined
	prior to the execution of any user code.
	
	RESOLUTION
	==========
	
	If you want the Command window to behave as it does in FoxPro for Windows and
	FoxPro for MS-DOS, add the following line to the CONFIG.FPM file:
	
	     MACDESKTOP = OFF
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
