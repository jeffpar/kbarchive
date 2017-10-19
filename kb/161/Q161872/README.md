---
layout: page
title: "Q161872: FIX: ActiveX Control Fails to Fire Click Event"
permalink: /kb/161/Q161872/
---

## Q161872: FIX: ActiveX Control Fails to Fire Click Event

	Article: Q161872
	Product(s): Microsoft C Compiler
	Version(s): 4.20
	Operating System(s): 
	Keyword(s): kbVC kbBug kbfix kbISSkbbuglist kbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an ActiveX control that subclasses a button, you may find that the
	control doesn't fire a "click" event. You can observe this behavior by running
	the BUTTON sample included with Visual C++ 4.2.
	
	CAUSE
	=====
	
	There is a bug in the COleControl::OnLButtonUp() function. CWnd::OnLButtonUp()
	should be called within the function before calling COleControl::ButtonUp().
	
	RESOLUTION
	==========
	
	You can work around the problem by trapping the WM_LBUTTONUP message in your
	control. Copy the code from the OnLButtonUp() function located in
	\MSDEV\MFC\SRC\CTLEVENT.CPP and place it into your new handler. Move the call to
	CWnd::OnLButtonUp() before the call to ButtonUp() so that the new function looks
	like the following:
	
	     void CYourButtonCtrl::OnLButtonUp(UINT nFlags, CPoint point)
	     {
	        HWND hWndSave = m_hWnd;
	        CWnd::OnLButtonUp(nFlags, point);  // moved the call here
	
	             ButtonUp(LEFT_BUTTON, nFlags, point);
	        if (m_hWnd != hWndSave)
	           return;
	
	        if (m_bInPlaceActive && !m_bUIActive && m_bPendingUIActivation &&
	           (GetFocus() == this || IsChild(GetFocus())))
	        {
	           m_bPendingUIActivation = FALSE;
	           OnActivateInPlace(TRUE, NULL);
	        }
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.2b.
	
	REFERENCES
	==========
	
	For more information about Visual C++ 4.2b, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q156934 PATCH: Visual C++ 4.2b Patch
	
	Additional query words: 4.20 kbdsd FIXLIST4.20b
	
	======================================================================
	Keywords          : kbVC kbBug kbfix kbISS kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.20
	Solution Type     : kbfix
	
	=============================================================================
	
