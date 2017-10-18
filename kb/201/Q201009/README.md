---
layout: page
title: "Q201009: Sample: WrapTBar.exe Wraps Toolbar During CFrameWnd Resizing"
permalink: kb/201/Q201009/
---

## Q201009: Sample: WrapTBar.exe Wraps Toolbar During CFrameWnd Resizing

	Article: Q201009
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMFC kbToolbar kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WrapTBar.exe is a sample that demonstrates how to implement a toolbar that wraps
	according to the parent frame size. When the parent CFrameWnd is resized, the
	toolbar checks whether the new window width is wide enough to display all the
	buttons on the same row; if not, the toolbar wraps accordingly.
	
	If your application requires that all toolbar buttons be accessible at all times,
	or if it allows the user to customize the toolbar by adding new buttons, you
	might decide to use this enhancement. The drawback of this sample is that it
	requires a fixed-size, nondockable toolbar. If you need to implement this
	behavior for dockable toolbars too, you might need to subclass the docking bar
	window, associated with the CDockBar class, and provide a new handler for
	WM_SIZEPARENT message.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	WrapTBar.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	  File Name                Size
	  ---------------------------------------------------------
	
	  WrapFixedToolBar.h,      Implement the CToolBar-derived class
	  WrapFixedToolBar.cpp     that would provide the desired behavior.
	  WrapToolBar.h            The main header file (CWrapToolBarApp class).
	  WrapToolBar.cpp          The main application source file.
	  WrapToolBar.rc           Listing of all Windows resources used.
	  res\WrapToolBar.ico      Icon file.
	  res\WrapToolBar.rc2      Resources not edited by the IDE.
	  WrapToolBar.clw          Information used by ClassWizard.
	  MainFrm.h,
	  MainFrm.cpp              The frame class CMainFrame.
	  res\Toolbar.bmp          Used to create tiled images for the toolbar.
	  WrapToolBarDoc.h,
	  WrapToolBarDoc.cpp       The document CWrapToolBarDoc.
	  WrapToolBarView.h,
	  WrapToolBarView.cpp      The view of the document.
	  StdAfx.h,
	  StdAfx.cpp               Used to build a precompiled header (PCH) file.
	  Resource.h               Defines new resource IDs.
	
	The core of this solution relies on handling the MFC private WM_SIZEPARENT
	message. This message is sent to all child-windows of CFrameWnd-derived classes
	when the frame window is resized, ensuring the proper negotiation of the client
	space.
	
	By deriving a new class from CToolBar and providing a handler for WM_SIZEPARENT,
	we solve the problem. The handler resembles the following:
	
	  LRESULT CWrapFixedToolBar::OnSizeParent(WPARAM, LPARAM lParam)
	  {
	      AFX_SIZEPARENTPARAMS* lpLayout = (AFX_SIZEPARENTPARAMS*)lParam;
	      DWORD dwStyle = RecalcDelayShow(lpLayout);
	
	      if ((dwStyle & WS_VISIBLE) && (dwStyle & CBRS_ALIGN_ANY) != 0)
	      {
	          CRect rect;
	          rect.CopyRect(&lpLayout->rect);
	          // Reposition buttons on toolbar according to available space.
	          SetWidth(rect.Width());
	          // Pass message processing to base class handler.
	          CToolBar::OnSizeParent(0, lParam);
	      }
	      return 0;
	  }
	
	The CWrapFixedToolBar::SetWidth() function should be implemented as:
	
	  void CWrapFixedToolBar::SetWidth(long lWidth)
	  {
	      TBBUTTON* pData;
	      // Read the toolbar buttons.
	      int nCount = GetToolBarCtrl().GetButtonCount();
	      if (nCount != 0)
	      {
	          pData = new TBBUTTON[nCount];
	          for (int i = 0; i < nCount; i++)
	              _GetButton(i, &pData[i]);
	      }
	      else
	          return;
	
	      // Get the toolbar buttons offsets in the toolbar area.
	      CRect rect;
	      rect.SetRectEmpty();
	      CalcInsideRect(rect, TRUE);
	
	      // Wrap buttons according to available space.
	      WrapToolBar(pData, nCount, lWidth - abs(rect.Width()));
	
	      // Save toolbar buttons to underlying toolbar control.
	      if (nCount != 0)
	          for (int i = 0; i < nCount; i++)
	              _SetButton(i, &pData[i]);
	
	      if (pData)
	          delete [] pData;
	  }
	
	Finally, change the toolbar creation code in CMainFrame::OnCreate() to make it
	CBRS_SIZE_FIXED and to disable the docking capabilities.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbMFC kbToolbar kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
