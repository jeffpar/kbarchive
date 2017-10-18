---
layout: page
title: "Q141532: FIX: OnInitMenuPopup Deletes Temporary Objects"
permalink: kb/141/Q141532/
---

## Q141532: FIX: OnInitMenuPopup Deletes Temporary Objects

	Article: Q141532
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When overriding CWnd::OnInitMenuPopup, while the CMenu pointer passed in is
	accessed, after calling the base class OnInitMenuPopup, the program may cause an
	ASSERT, access violation, or other problems.
	
	CAUSE
	=====
	
	In MFC version 4.0 calls to AfxLockTempMaps and AfxUnlockTempMaps were added to
	CWnd::OnInitMenuPopup. When AfxUnlockTempMaps is called, MFC's temporary object
	map reference count will go to zero causing all temporary MFC objects to be
	deleted. When the call to OnInitMenuPopup returns, the CMenu pointer (which is a
	temporary) will be invalid.
	
	RESOLUTION
	==========
	
	Make a call to AfxLockTempMaps before the call to the base class and a call to
	AfxUnlockTempMaps before returning from your OnInitMenuPopup override. This will
	stop the internal reference count from reaching zero inside
	CWnd::OnInitPopupMenu and the CMenu will not be deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	MFC maintains a map from handles such as HMENUs to their C++ wrapper objects.
	When a call is made to, for example, GetMenu, MFC attempts to find the C++
	wrapper object that corresponds to the HMENU ::GetMenu returns. If no object in
	the permanent map is found, MFC creates a temporary object that is normally
	destroyed in OnIdle processing by a call to AfxUnlockTempMaps.
	
	Sample Code to Reproduce or Resolve Problem
	-------------------------------------------
	
	  /* Compile options needed: default
	  */ 
	
	  // Use this code to fix the problem:
	  void CMainFrame::OnInitMenuPopup(CMenu* pPopupMenu, UINT nIndex,
	                                                     BOOL bSysMenu)
	
	  {
	      #if _MFC_VER == 0x400
	      AfxLockTempMaps();
	      #endif
	
	      CMDIFrameWnd::OnInitMenuPopup(pPopupMenu, nIndex, bSysMenu);
	
	      // TODO: Add your message handler code here
	
	      #if _MFC_VER == 0x400
	      AfxUnlockTempMaps();
	      #endif
	
	  }
	
	  // Use the following code to reproduce the problem in an MDI application:
	  void CMainFrame::OnInitMenuPopup(CMenu* pPopupMenu, UINT nIndex,
	                                                     BOOL bSysMenu)
	
	  {
	
	      CMDIFrameWnd::OnInitMenuPopup(pPopupMenu, nIndex, bSysMenu);
	
	      // The next line will cause an ASSERT on line 1034 in a debug
	      // build because pPopupMenu is an invalid pointer
	      pPopupMenu->CheckMenuItem(0, MF_BYPOSITION | MF_CHECKED);
	
	  }
	
	REFERENCES
	==========
	
	MFC Technical Note 3: Mapping of Windows Handles to Objects.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q139469 How to Use TrackPopupMenu() and Update UI Handlers
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
