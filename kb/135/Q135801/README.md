---
layout: page
title: "Q135801: BUG: Print Preview Toolbar May Be Off Screen"
permalink: kb/135/Q135801/
---

## Q135801: BUG: Print Preview Toolbar May Be Off Screen

	Article: Q135801
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500bugkbbuglist
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The print preview toolbar may only be partially viewable if you have a toolbar,
	such as the Standard toolbar, docked at the top of the screen, and only a small
	amount of space exists to the right of the already docked toolbar. The Print
	Preview toolbar continues off the screen to the right.
	
	If you zoom the following items to full screen, the title bar of the window
	disappears, the Close button appears to the left of the File Menu, and the Zoom
	button appears to the right of the Help Menu. This happens when you zoom the
	following windows:
	
	- Print Preview window for Reports/Labels.
	
	- The editing window for the Report, Label, Form, Program, or Class Browser
	
	CAUSE
	=====
	
	When Visual FoxPro requests a dock to the top of the window, the toolbar manager
	should determine if it will fit on the current row, and if not, it should open
	up a new row. Currently, however, the toolbar manager will only open up a new
	row if none of the new toolbar will be visible.
	
	RESOLUTION
	==========
	
	Undock the Print Preview toolbar and close the report by clicking the Close
	button on the toolbar. The next time you preview the report, the Print Preview
	toolbar will appear in the previous undocked location.
	
	As an alternative, you can close or undock all other toolbars before doing a
	Print Preview of the report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: vga video kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
