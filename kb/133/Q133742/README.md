---
layout: page
title: "Q133742: BUG: Toolbar Options Positioned Off the Screen"
permalink: /kb/133/Q133742/
---

## Q133742: BUG: Toolbar Options Positioned Off the Screen

	Article: Q133742
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Toolbar options are inaccessible because they are positioned too far to the
	right and off the screen.
	
	CAUSE
	=====
	
	Visual FoxPro's toolbar engine is designed to check if any portion of a toolbar
	will fit on the current row, if not, it opens a new row. Visual FoxPro does not
	check to see if an entire toolbar will be visual to the user when docked.
	
	WORKAROUND
	==========
	
	Visual FoxPro toolbars are moveable and dockable. Position or dock the toolbar
	in another location on the screen, or change the video driver setting to a
	higher video resolution so that a larger portion of the toolbar will be visible
	to the user when docked.
	
	NOTE: The following command positions the toolbar in the center of the FoxPro
	desktop only if the toolbar is not docked. It will not move the toolbar if it is
	docked:
	
	     MOVE WINDOW "<toolbar name>" CENTER
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual FoxPro.
	
	2. On the View menu, click Toolbars.
	
	3. Select these toolbars:
	
	  " Database Designer
	  Form Designer
	  Print Preview
	  Layout " (without the quotation marks)
	
	4. Attempt to dock each toolbar at the top right corner of the screen. Notice
	  that Visual FoxPro allows a toolbar to dock even though all of its options
	  are not accessible.
	
	Additional query words: kbvfp600 kbvfp500
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
