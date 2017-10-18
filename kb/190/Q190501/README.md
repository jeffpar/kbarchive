---
layout: page
title: "Q190501: FIX: Resizing CToolbar with Dropdown Arrow Buttons Freezes Apps"
permalink: kb/190/Q190501/
---

## Q190501: FIX: Resizing CToolbar with Dropdown Arrow Buttons Freezes Apps

	Article: Q190501
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resizing a toolbar (CToolBar class) with drop-down arrow buttons causes an
	infinite loop.
	
	CAUSE
	=====
	
	The application is looping in CToolBar::SizeToolBar() because neither sizeMin.cx
	nor sizeMax.cx changes its value. In other words, in CToolBar::SizeToolBar(),
	the loop hangs on the case where sizeMax == sizeMid.
	
	RESOLUTION
	==========
	
	Because CToolBar::SizeToolBar() is not a virtual function, we need to
	reimplement this function and override the virtual functions in CToolBar class
	to call our SizeToolBar() function.
	
	Below are the steps to correct this problem:
	
	1. Derive a class from CToolBar called CMyToolBar.
	
	2. Override virtual functions: CalcFixedLayout() and CalcDynamicLayout() in
	  CMyToolBar class because they both call CalcLayout(), which in turn calls
	  SizeToolBar(). Both CalcLayout() and SizeToolBar are nonvirtual functions in
	  CToolBar class.
	
	  The code for all these functions can be copied from the MFC source file
	  Bartool.cpp.
	
	3. Override CalcLayout() in CMyToolBar class. The code in CToolBar::CalcLayout()
	  requires the _AFX_CONTROLPOS structure, which should be copied from the
	  Bartool.cpp file as well.
	
	  The code in CToolBar::CalcLayout() also calls the _GetButton() and
	  _SetButton() functions. These functions have internal linkage, so we need to
	  override those to avoid the LNK2001 error.
	
	  NOTE: The first statement of _GetButton() casts the "this" pointer to
	  CToolBar*, we have to cast it to CMyToolBar* in order to call the protected
	  CWnd::DefWindowProc() function. For example:
	
	        void CMyToolBar::_GetButton(int nIndex, TBBUTTON* pButton) const
	        {
	           CMyToolBar* pBar = (CMyToolBar*) this;
	           VERIFY(pBar->DefWindowProc(TB_GETBUTTON, nIndex,
	             (LPARAM)pButton));
	           // TBSTATE_ENABLED == TBBS_DISABLED so invert it.
	           pButton->fsState ^= TBSTATE_ENABLED;
	        }
	
	4. Override SizeToolBar() in CMyToolBar class. Replace the while-loop with the
	  following fix-up code:
	
	        while (sizeMin.cx < sizeMax.cx)
	        {
	           sizeMid.cx = (sizeMin.cx + sizeMax.cx) / 2;
	           WrapToolBar(pData, nCount, sizeMid.cx);
	           sizeMid = CalcSize(pData, nCount);
	
	           if (nLength < sizeMid.cy)
	           {
	              if (sizeMin == sizeMid)
	              {
	                 WrapToolBar(pData, nCount, sizeMax.cx);
	                 return;
	              }
	              sizeMin = sizeMid;
	           }
	           else if (nLength > sizeMid.cy && sizeMax != sizeMid)
	              sizeMax = sizeMid;
	           else
	              return;
	        }
	
	5. Finally, use CMyToolBar when declaring the toolbar object in the header file
	  of the CMainFrame class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	In CToolBar::SizeToolBar(), the loop hangs on the case where sizeMax ==
	sizeMid:
	
	     while (sizeMin.cx < sizeMax.cx)
	     {
	        sizeMid.cx = (sizeMin.cx + sizeMax.cx) / 2;
	        WrapToolBar(pData, nCount, sizeMid.cx);
	        sizeMid = CalcSize(pData, nCount);
	
	        if (nLength < sizeMid.cy)
	        {
	           if (sizeMin == sizeMid)
	           {
	              WrapToolBar(pData, nCount, sizeMax.cx);
	              return;
	           }
	           sizeMin = sizeMid;
	        }
	        else if (nLength > sizeMid.cy)
	           sizeMax = sizeMid;
	        else
	           return;
	     }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run MFC AppWizard to create an SDI .EXE.
	
	2. Add the following code to CMainFrame::OnCreate(), to add a drop-down arrow to
	  the Open button:
	
	        // Set the drop-down buttons to have the appropriate styles.
	
	        CToolBarCtrl& rCtrl = m_wndToolBar.GetToolBarCtrl();
	
	        TBBUTTONINFO tbbi;
	        tbbi.dwMask = TBIF_STYLE;
	        tbbi.cbSize = sizeof tbbi;
	
	        rCtrl.GetButtonInfo(ID_FILE_OPEN, &tbbi);
	        tbbi.fsStyle |= TBSTYLE_DROPDOWN;
	
	        VERIFY(rCtrl.SetButtonInfo(ID_FILE_OPEN, &tbbi));
	
	        rCtrl.SetExtendedStyle(
	           rCtrl.GetExtendedStyle() | TBSTYLE_EX_DRAWDDARROWS);
	
	3. Build and run the .EXE.
	
	4. Undock the toolbar.
	
	5. Grab the BOTTOM border and resize, making the toolbar three rows in height
	  (resizing using the right border seems to work fine).
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Yeong-Kah Tam, Microsoft Corporation
	
	
	Additional query words: kbvc600bug
	
	======================================================================
	Keywords          : kbVC600bug kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
