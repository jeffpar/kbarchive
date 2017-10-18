---
layout: page
title: "Q101184: INFO: Retrieving the CMDIChildWnd Parent Window"
permalink: kb/101/Q101184/
---

## Q101184: INFO: Retrieving the CMDIChildWnd Parent Window

	Article: Q101184
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a CMDIChildWnd, the parent of the multiple document interface
	(MDI) window is a "MDICLIENT" control. The handle to the parent frame window can
	be retrieved in the following way:
	
	     hwnd =::GetParent(lpcreatestruct.hwndParent);
	
	Alternatively, use the following
	
	     CMDIFrameWnd* pFrame = (CMDIFrameWnd*)GetParentFrame();
	
	to acquire a pointer to the parent MDI frame window object.
	
	NOTE: GetParentFrame is declared to return a pointer to a CFrameWnd object, and
	therefore it is necessary to typecast the result to a CMDIFrameWnd object.
	
	Additional query words: kbinf 1.00 1.5 1.51 1.52 2.00 2.10 2.5 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
