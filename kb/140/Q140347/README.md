---
layout: page
title: "Q140347: How to Manage Differences in Stacked Pages Between Platforms"
permalink: kb/140/Q140347/
---

## Q140347: How to Manage Differences in Stacked Pages Between Platforms

	Article: Q140347
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 user interface requires that stacked pages in a page frame be
	aligned vertically. However, Windows 3.1 and Windows for Workgroups, present
	stacked pages using a step effect. This article provides a way to take this
	difference into account when developing a form to be run on multiple platforms.
	
	MORE INFORMATION
	================
	
	When you use the PageFrame control to build a form in Visual FoxPro 3.0, Visual
	FoxPro automatically calculates the left position of the page. You cannot modify
	it under program control.
	
	In Windows 95 and Windows NT, pages are stacked as follows:
	
	          -----------------------------
	          | Page 4  | Page 5 | Page 6 |
	          -----------------------------
	          | Page 1  | Page 2 | Page 3 |
	          -----------------------------
	
	In Windows 3.1 and Windows for Workgroups, pages are stacked as follows:
	
	             ------------------------------
	             | Page 4  | Page 5  | Page 6 |
	          ---------------------------------
	          | Page 1   | Page 2  | Page 3 |
	          -------------------------------
	
	Each new row is placed 12 pixels to the right of the preceding row.
	
	If you develop a form under Windows 95 and run it under Windows 3.1, Visual
	FoxPro accommodates the stepping effect by maintaining the same width for the
	page frame and recalculating the width of each page. The width of each page is
	therefore smaller. Under these conditions, if a control is placed on the right
	edge of a page, it might be truncated when the page is displayed on a different
	platform.
	
	If a page frame with stacked pages is to be run under different platforms, place
	controls away from the edges of a page to prevent them from being truncated, or
	modify the width of the page frame when the form is run in Windows 3.1. For
	example, if the page frame has three rows, use the following code in the Init
	event of the PageFrame.
	
	     IF VAL(SUBSTR(OS(1),9,4)) < 4.00  && Verify the Operating System
	        THIS.WIDTH = THIS.WIDTH + (12.0 * 3)
	     ENDIF
	
	In this code, 12.0 is a constant and 3 represents the number of rows of tabs.
	
	
	Additional query words: VFoxWin tab tabstretch
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
