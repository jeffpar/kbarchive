---
layout: page
title: "Q85511: Problems Stopping in Animate Mode"
permalink: /kb/085/Q85511/
---

## Q85511: Problems Stopping in Animate Mode

	Article: Q85511
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	When using the animate function in CodeView for Windows, attempts to
	stop the animation may not be recognized by CodeView. To stop the
	animate operation, a key must be pressed when CodeView has focus. If
	CodeView does not have focus, the keystroke is sent to the animated
	program. If the trace speed is set too fast, a key may have to be
	pressed several times before CodeView is sent the keystroke.
	
	To make it easier to catch CodeView while it has focus, set the trace
	speed slower under the Options menu:
	
	
	1. Before starting the animation, choose Trace Speed from the Options menu.
	
	2. Select the speed you want the trace to proceed at (that is, slow, medium, or
	  fast).
	
	3. Choose OK.
	
	Additional query words: kbinf 3.00 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,4.0,4.01,4.1
	
	=============================================================================
	
