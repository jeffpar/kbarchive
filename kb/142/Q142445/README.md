---
layout: page
title: "Q142445: DOC: CWnd::LockWindowUpdate Does Not Unlock the Window"
permalink: /kb/142/Q142445/
---

## Q142445: DOC: CWnd::LockWindowUpdate Does Not Unlock the Window

	Article: Q142445
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0; :1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200b
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for CWnd::LockWindowUpdate() states this function will disable
	or reenable drawing for the CWnd object. In the remarks section, the sentence
	"Disables or reenables drawing in the given window" is incorrect. Starting with
	Visual C++ version 2.0, you should use CWnd::UnlockWindowUpdate() to reenable
	drawing to a window locked with CWnd::LockWindowUpdate().
	
	The documentation error was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	CWnd::LockWindowUpdate() takes no parameters and is implemented as an in-line
	call to the Windows function ::LockWindowUpdate(). The function
	::LockWindowUpdate() is called with the this->m_hWnd parameter which causes
	the window to be locked. To re-enable drawing, NULL should be passed to
	::LockWindowUpdate().
	
	In Visual C++ version 2.0 and later, call CWnd::UnlockWindowUpdate() to reenable
	drawing to your window. In earlier versions, call the Windows
	::LockWindowUpdate( NULL ).
	
	Additional query words: 1.00 1.50 2.00 2.10 2.20 dskbsweep 4.00 4.10
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbvc150 kbvc100 kbVC220 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : winnt:1.0,2.0,2.1,2.2,4.0; :1.0,1.5,1.51,1.52
	Solution Type     : kbfix
	
	=============================================================================
	
