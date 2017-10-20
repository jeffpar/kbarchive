---
layout: page
title: "Q98863: DOC: SB_ENDSCROLL Code Missing from OnHScroll() Documentation"
permalink: /kb/098/Q98863/
---

## Q98863: DOC: SB_ENDSCROLL Code Missing from OnHScroll() Documentation

{% raw %}

	Article: Q98863
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbMFC kbScrollBar KbUIDesign kbVC100
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	The SB_ENDSCROLL scroll bar notification code, which indicates that the
	user has released the mouse button after scrolling, is missing from the
	documentation for the CWnd::OnHScroll() function. One use of the
	SB_ENDSCROLL message defers time-consuming drawing until the user stops
	scrolling.
	
	The SB_ENDSCROLL code is included in the documentation for the
	CWnd::OnVScroll() function and in the WM_HSCROLL message documentation in
	the Windows Software Development Kit (SDK) "Programmer's Reference, Volume
	3: Messages, Structures, and Macros" manual. The scroll bar notification
	codes are also listed in the Windows header file WINDOWS.H and in the
	Windows NT header file WINUSER.H.
	
	The documentation has been corrected in later versions.
	
	SUMMARY
	=======
	
	
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          : kbdocfix kbMFC kbScrollBar KbUIDesign kbVC100 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
