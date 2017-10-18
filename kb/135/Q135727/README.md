---
layout: page
title: "Q135727: BUG: VCMAC: Remote Debugger Hangs at Breakpoint"
permalink: kb/135/Q135727/
---

## Q135727: BUG: VCMAC: Remote Debugger Hangs at Breakpoint

	Article: Q135727
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDebug kbide kbHWMAC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a debugger breaks at a breakpoint, then when a combo box is displayed, Visual
	C++ and the Macintosh hang.
	
	
	RESOLUTION
	==========
	
	While debugging, remove the combo box, or do not set a breakpoint such that the
	breakpoint is hit when the combo box is displayed in the application.
	
	The problem occurs only on the Power Macintosh. It does not happen on a 68K
	Macintosh. Try debugging using a 68K Macintosh.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To see this problem, create an application that brings up a dialog box that has
	a combo box in it. Set a breakpoint on a function that gets called when the
	dialog box is up. For example, set a breakpoint in the OK button handler. Run
	the application under the remote debugger that comes with the Visual C++
	Macintosh add-on. If the debugger hits the breakpoint, it will cause Visual C++
	to hang. The Macintosh is also hung and needs to be rebooted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbHWMAC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
