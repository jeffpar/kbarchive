---
layout: page
title: "Q141199: FIX: Pop-Up Menu Items Disabled for an OLE Control"
permalink: /kb/141/Q141199/
---

## Q141199: FIX: Pop-Up Menu Items Disabled for an OLE Control

{% raw %}

	Article: Q141199
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600fix kbGrpDSM
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The menu items are disabled even though menu handlers were added with Class
	Wizard when you create an OLE Control and then use the Pop-up Menu component in
	the Component Gallery to add a context menu to the COleControl derived class.
	The problem occurs after you modify the context menu, and then add handlers for
	the menu items, build the Control, place it in Tstcon32.exe, and bring up the
	context menu.
	
	CAUSE
	=====
	
	Within the OnContextMenu function added by the Pop-up Menu Component, the code
	makes the top-most parent window the parent of the context menu. The menu sends
	the WM_COMMAND message to its parent first, which can then route the command
	appropriately through the application. This method works for windows in an MFC
	application that are part of the command-routing scheme. However, because OLE
	Controls are not part of the routing mechanism, the WM_COMMAND message never
	gets back to them and therefore the context menu doesn't see the handlers, so
	the menu items are disabled.
	
	RESOLUTION
	==========
	
	When you add a context menu to an OLE control, you need to make the COleControl
	derived class the parent of the context menu. The Pop-up Menu Component creates
	the following code within the CWnd derived class. If the pop-up menu is being
	added to a COleControl-derived class, you need to delete the following lines of
	code:
	
	     while (pWndPopupOwner->GetStyle() & WS_CHILD)
	        pWndPopupOwner = pWndPopupOwner->GetParent();
	
	Code Created by Pop-up Menu Component
	-------------------------------------
	
	     void CSPLITCtrl::OnContextMenu(CWnd*, CPoint point)
	     {
	        // CG: This function was added by the Pop-up Menu component
	
	        CMenu menu;
	        VERIFY(menu.LoadMenu(CG_IDR_POPUP_SPLITCTRL));
	
	        CMenu* pPopup = menu.GetSubMenu(0);
	        ASSERT(pPopup != NULL);
	
	        CWnd* pWndPopupOwner = this;
	        while (pWndPopupOwner->GetStyle() & WS_CHILD)
	           pWndPopupOwner = pWndPopupOwner->GetParent();
	
	        pPopup->;TrackPopupMenu(TPM_LEFTALIGN | TPM_RIGHTBUTTON, point.x,
	                               point.y, pWndPopupOwner);
	     }
	
	By removing the two lines of code, you are leaving the COleControl-derived class
	as the parent of the menu. As a result, the control receives the WM_COMMAND
	messages sent by the pop-up menu, so the normal ON_COMMAND functionality added
	by Class Wizard worked as designed.
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 6.0 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
