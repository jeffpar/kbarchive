---
layout: page
title: "Q220021: FIX: CHtmlView Does Not Repaint Correctly in AppWizard MDI APP"
permalink: kb/220/Q220021/
---

## Q220021: FIX: CHtmlView Does Not Repaint Correctly in AppWizard MDI APP

	Article: Q220021
	Product(s): Microsoft C Compiler
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbDocView kbMFC kbOSWin2000 kbVC600bug kbGrpDSMFCATL kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an AppWizard-generated MDI application with more than two view windows
	overlapping each other, if the user clicks in the client area of the MDI frame
	window other than the view, such that the view loses the focus, and then clicks
	back in the client area of the view, the CHtmlView does not repaint correctly.
	However, if the user clicks the nonclient area of the view, the CHtmlView
	repaints correctly.
	
	CAUSE
	=====
	
	The WS_CLIPCHILDREN style is not set for CHtmlView, and therefore, on activating
	the view by clicking the view area, CHtmlView does not send a message to the
	embedded Web Browser control to repaint itself.
	
	RESOLUTION
	==========
	
	To work around this problem, in PreCreateWindow of CHtmlView, add the
	WS_CLIPCHILDREN style. Following is a code example:
	
	  BOOL CSampleView::PreCreateWindow(CREATESTRUCT& cs)
	  {
	  	// TODO: Modify the Window class or styles here by modifying
	  	//  the CREATESTRUCT cs
	  	cs.style |= WS_CLIPCHILDREN;
	
	  	return CHtmlView::PreCreateWindow(cs);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MDI application using the AppWizard.
	
	2. In step 6/6 of AppWizard, choose View class as CHtmlView.
	
	3. Build and run it.
	
	4. On the File menu, click New, and launch a new ChildFrame so that you have
	  more than two frames, one overlapping the other.
	
	5. Click in the client area of the MDI frame window other than the CHtmlView,
	  such that the view in consideration loses focus.
	
	6. Try to set focus by clicking in the client area of CHtmlView in
	  consideration.
	
	RESULTS: Notice that the view has not completely repainted. Portions of the view
	window, overlapped by the other view window, are not painted.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Vidyanand
	N. Rajpathak, Microsoft Corporation.
	
	
	Additional query words: CHtmlView Repaint WS_CLIPCHILDREN
	
	======================================================================
	Keywords          : kbActiveX kbDocView kbMFC kbOSWin2000 kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
