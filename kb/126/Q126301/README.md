---
layout: page
title: "Q126301: FIX: CMDIFrameWnd Caption Not Updated When Child Closed"
permalink: /kb/126/Q126301/
---

## Q126301: FIX: CMDIFrameWnd Caption Not Updated When Child Closed

{% raw %}

	Article: Q126301
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbprogramming kbDocView kbMDI KbUIDesign kbVC100bug kbVC150bug kbVC200bug kbVC210fix kb
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing a maximized MDI child window will not update the main frame window
	caption if the frame window is narrower than the menu bar (menu has wrapped to
	the second line). This causes the main frame window to show a document name even
	if no documents are open.
	
	CAUSE
	=====
	
	If the main frame window is narrower than the menu, CMDIChildWnd::OnSize() is
	called twice, which calls GetMDIFrame()->OnUpdateFrameTitle(TRUE) to update
	the frame window caption. The last time OnUpdateFrameTitle(TRUE) is called, it
	updates the frame window caption with the previous document name, even though
	the document is closed.
	
	RESOLUTION
	==========
	
	Override CMDIChildWnd::DestroyWindow() to turn off FWS_ADDTOTITLE for the main
	frame window during the destroy window call for maximized child windows. Follow
	these steps:
	
	1. Derive a new MDI child window class from CMDIChildWnd, perhaps by using Class
	  Wizard.
	
	2. For the new class, override the DestroyWindow() function by using the
	  following source code:
	
	    BOOL CMyMDIChildWnd::DestroyWindow()
	      {
	      // Turn off the FWS_ADDTOTITLE style for the main frame window
	      // if it is a maximized main frame window.
	      BOOL bMaximized = (GetStyle() & WS_MAXIMIZE);
	      CMDIFrameWnd* pFrameWnd = GetMDIFrame();
	      DWORD dwStyle;
	      if (bMaximized)
	          {
	          dwStyle = ::SetWindowLong(pFrameWnd->m_hWnd, GWL_STYLE,
	              pFrameWnd->GetStyle() & ~FWS_ADDTOTITLE);
	          }
	
	      // Go ahead and destroy and MDI child window.
	      BOOL bResult = CMDIChildWnd::DestroyWindow();
	
	      // Restore the default window style for the main frame window.
	      if (bMaximized)
	          {
	          ::SetWindowLong(pFrameWnd->m_hWnd, GWL_STYLE, dwStyle);
	          }
	
	      return bResult;
	     }
	
	3. In the project .CPP file, be sure to use the newly derived MDI child window
	  class to replace CMDIChildWnd in the CMultiDocTemplate() statement, as in
	  this example:
	
	      #include "mdichild.h"          // header file for CMyMDIChildWnd
	
	     BOOL CMyWinApp::InitInstance()
	      {
	      ...
	      CMultiDocTemplate* pDocTemplate;
	      pDocTemplate = new CMultiDocTemplate(
	          IDR_PROJECTTYPE,
	          RUNTIME_CLASS(CMyDocument),
	          RUNTIME_CLASS(CMyMDIChildWnd),     // use it here!!!
	          RUNTIME_CLASS(CMyView));
	
	      AddDocTemplate(pDocTemplate);
	      ...
	     }
	
	Here PROJECT is the project name, CMyDocument is the CDocument class,
	CMyMDIChildWnd is the CMDIChildWnd class, and CMyView is the CView class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.10
	for Windows NT.
	
	MORE INFORMATION
	================
	
	When the child window is maximized and the main frame window is wider than the
	menu, the CMDIChildWnd::OnSize() function does not get called when the child
	window is closed. However, when the frame window is narrower than the menu,
	CMDIChildWnd::OnSize() gets called twice when the child window is closed, first
	with SIZE_MAXIMIZED and then with SIZE_RESTORED.
	
	CMDIChildWnd::OnSize() calls GetMDIFrame()->OnUpdateFrameTitle(TRUE). The
	first time CMDIChildWnd::OnSize() is called (with SIZE_MAXIMIZED),
	OnUpdateFrameTitle() updates the frame window's caption correctly, but
	redundantly. The second time MDIChildWnd::OnSize() is called (with
	SIZE_RESTORED), OnUpdateFrameTitle() decides there is a current document because
	its call to GetActiveDocument() returned a valid pointer and it updates the
	frame window's caption with the document name.
	
	This bug can be seen in the MFC sample "MULTIPAD" included with Visual C++.
	
	Additional query words: 1.50 1.51 1.00 2.00 2.50 2.51 2.10 3.00
	
	======================================================================
	Keywords          : kbprogramming kbDocView kbMDI KbUIDesign kbVC100bug kbVC150bug kbVC200bug kbVC210fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
