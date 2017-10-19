---
layout: page
title: "Q199538: BUG: Scroll Bars May Be Re-Enabled or Crash App When Clicked"
permalink: /kb/199/Q199538/
---

## Q199538: BUG: Scroll Bars May Be Re-Enabled or Crash App When Clicked

	Article: Q199538
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbDocView kbHWMAC kbMFC KbUIDesign kbVC400bug kbDSupport kbGrpDSMFCATLkbbuglist
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clicking a disabled scroll bar of a window, the scroll bar becomes enabled.
	If the mouse click occurs where the scroll thumb would be, the application
	crashes.
	
	CAUSE
	=====
	
	There is a bug in the Windows Portability Layer.
	
	RESOLUTION
	==========
	
	Set the scroll range to 0, 0 (zero, zero) using SetScrollSizes() or
	SetScrollInfo().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When a window has its scroll bar enabled, and is disabled using the following
	code
	
	     // hWnd is a handle to window
	     EnableScrollBar(hWnd, SB_BOTH, ESB_DISABLE_BOTH);
	
	then the scroll bars are enabled if the user generates a mousedown in the
	disabled scroll bar. If the mousedown occurs where the scroll thumb would be,
	the application crashes with the following error message:
	
	  Sorry, a system error occurred.
	  "myapplication"
	  Bus error
	
	This problem appears for the scroll bar of a combo box but does not appear for
	the scroll-bar control. This fails with both PowerPC and 68KB platforms.
	
	The workaround is to set the scroll range to 0, 0, as demonstrated below:
	
	     SCROLLINFO si;
	     si.cbSize = sizeof(SCROLLINFO);
	     si.fMask = SIF_RANGE;
	     si.nMin = si.nMax = 0;
	     SetScrollInfo(hWnd, SB_HORZ, &si, TRUE);
	     SetScrollInfo(hWnd, SB_VERT, &si, TRUE);
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: CScrollView CComboBox CScrollBar bus error scrollbar
	
	======================================================================
	Keywords          : kbDocView kbHWMAC kbMFC KbUIDesign kbVC400bug kbDSupport kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
