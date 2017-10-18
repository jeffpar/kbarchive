---
layout: page
title: "Q143209: PRB: MeasureItem Not Called for Popup Item on Owner-Draw Menu"
permalink: kb/143/Q143209/
---

## Q143209: PRB: MeasureItem Not Called for Popup Item on Owner-Draw Menu

	Article: Q143209
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbMenu kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CMenu::MeasureItem() function for an owner-draw menu isn't called for those
	menu items that bring up submenus.
	
	CAUSE
	=====
	
	This is a limitation of the self-drawing capability of MFC owner-draw menus.
	
	RESOLUTION
	==========
	
	For owner-draw menus that contain sub-popup menus, handle the WM_MEASUREITEM in
	the owning window. See the "Sample Code" section in this article for an example.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A menu item that brings up a submenu has no real ID associated with it. Instead
	the ID for this popup placeholder is actually the HMENU for the submenu
	associated with that item. As for all owner-draw menu items, Windows will send a
	WM_MEASUREITEM message to the application, specifying the address of a
	MEASUREITEMSTRUCT structure in lParam. The application should fill in this
	structure with the dimensions of the menu item. Now because the submenu item has
	an HMENU instead of an ID, this is the value that is passed in the idFrom
	variable of this structure. Essentially, an application that handles this
	message must recognize when this is an HWND for a valid submenu item. As of MFC
	4.0, MFC's implementation of CWnd::OnMeasureItem() does not make this
	determination correctly.
	
	An examination of the MFC source will reveal the problem. When
	CWnd::OnMeasureItem() is called by the receipt of this message, it uses
	FindPopupMenuFromID() to find the menu associated with a particular ID, so that
	the call pMenu->MeasureItem(...) can be made. Unfortunately
	FindPopupMenuFromID() does not check the case where the ID might be an HMENU. It
	will always return NULL in this case; therefore, the call to MeasureItem() will
	never be made.
	
	Sample Code
	-----------
	
	The following sample code demonstrates how to implement OnMeasureItem when the
	menu item in question is a submenu. m_hMenuSub is a member variable that was
	initialized when the menu was created. If the item is not a submenu, the MFC
	self-drawing menu code can still be used.
	
	  /* Compile options needed:  Default
	  */ 
	  void COwnerWindow::OnMeasureItem(int nIDCtl, LPMEASUREITEMSTRUCT
	                                                    lpMeasureItemStruct)
	  {
	      if ( lpMeasureItemStruct->CtlType == ODT_MENU &&
	           IsMenu((HMENU)lpMeasureItemStruct->itemID) &&
	           lpMeasureItemStruct->itemID == (UINT)m_hMenuSub )
	      {
	          // MFC's self-drawing won't work in this case
	          // go ahead and handle it here
	          lpMeasureItemStruct->itemWidth = 100;
	          lpMeasureItemStruct->itemHeight = 20;
	      }
	      else
	          // let MFC's self-drawing handle it
	          CFrameWnd::OnMeasureItem(nIDCtl, lpMeasureItemStruct);
	  }
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: 1.00 1.50 2.50 2.51 2.52 2.00 2.10 2.20 3.00 3.10 3.20 4.00
	
	======================================================================
	Keywords          : kbcode kbMenu kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
