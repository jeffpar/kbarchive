---
layout: page
title: "Q151758: BUG: Num Lock Indicator Light Doesn't Light up in VFP Mac"
permalink: /kb/151/Q151758/
---

## Q151758: BUG: Num Lock Indicator Light Doesn't Light up in VFP Mac

	Article: Q151758
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Visual FoxPro for the Power Macintosh is running and has focus,
	the Num Lock light does not light up and dim out as the Num Lock state is
	toggled on and off by the user pressing the NUM LOCK key.
	
	CAUSE
	=====
	
	The low-level handlers that provide this functionality in FoxPro 2.6 for the
	Macintosh on 68K machines do not work on the Power Macintosh.
	
	
	RESOLUTION
	==========
	
	The NUM LOCK key does set the Num Lock state correctly. This is indicated on the
	Visual FoxPro status bar by the term "NUM" appearing on the status bar when the
	Num Lock state is on, and the term "NUM" disappearing from the status bar.
	
	To turn the Visual FoxPro status bar on, enter the following in the Command
	window:
	
	     SET STATUS BAR ON
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, set or clear the Num Lock on the keyboard with the NUM
	LOCK key. Note that the Num Lock indicator light does not light up.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
