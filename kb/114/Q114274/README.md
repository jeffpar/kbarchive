---
layout: page
title: "Q114274: BUG: SKIP FOR Does Not Disable Menu Pad"
permalink: /kb/114/Q114274/
---

## Q114274: BUG: SKIP FOR Does Not Disable Menu Pad

	Article: Q114274
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbprogramming kbHWMAC kbvfpkbbuglist
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SKIP FOR option in the Menu Builder will not disable a menu bar pad when the
	condition evaluates to TRUE. This behavior is the same for the command SET SKIP
	OF PAD <pad name> OF _msysmenu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a quick menu.
	
	2. Open the File Prompt Options and add a SKIP FOR x expression.
	
	3. Generate the menu.
	
	4. In the Command window, type the following commands:
	
	  " x = .f.
	  DO quickmenu.mpr" (without the quotation marks)
	
	5. The File menu is enabled and works as expected.
	
	6. In the Command window, type "x = .t." (without the quotation marks).
	
	7. The File menu is disabled but isn't dimmed (gray).
	
	NOTE: The above steps will correctly dim the menu pad in FoxPro for MS-DOS and
	FoxPro for Windows.
	
	Additional query words: unavailable grey
	
	======================================================================
	Keywords          : kbprogramming kbHWMAC kbvfp kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	Issue type        : kbbug
	
	=============================================================================
	
