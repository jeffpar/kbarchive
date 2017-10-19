---
layout: page
title: "Q141865: FIX: Can't Get to Hidden Workspace After Enabling Docking View"
permalink: /kb/141/Q141865/
---

## Q141865: FIX: Can't Get to Hidden Workspace After Enabling Docking View

	Article: Q141865
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Project Workspace window is not accessible from the toolbar, toolbar context
	menu, View menu, or the keyboard ViewWorkspaceWindow command (ALT+0). Trying to
	gain access to the workspace by using one of these methods causes an illegal
	operation in MSDEV.EXE.
	
	On Windows 95 the error reads:
	
	  This program has performed an illegal operation and will be shut down.
	
	Selecting the details button reveals an invalid page fault in module MSVCSHL.DLL
	
	On Windows NT version 3.51, the error reads:
	
	  An application error has occurred
	
	  MSDEV.EXE
	  Exception: access violation (0x00000005), Address: 0x50012861
	
	
	RESOLUTION
	==========
	
	To work around this problem, do not enable docking view for the Project
	Workspace window while it is hidden.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. With the Project Workspace window in docking view, undock the window by
	  dragging it while holding the CTRL key down.
	
	2. Disable docking view for the window from the context menu.
	
	3. Close the window.
	
	4. Enable docking view for the window (on the Tools menu, click Options, and
	  select the Project Workspace checkbox in the Docking views list.
	
	This problem occurs only if the Project Workspace was not docked when entering
	step 2 of the procedure above.
	
	Additional query words: kbVC400bug crash Windows 95
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
