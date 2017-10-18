---
layout: page
title: "Q135118: FIX: ResizeParentToFit Won't Work w/ CScrollView on Windows 95"
permalink: kb/135/Q135118/
---

## Q135118: FIX: ResizeParentToFit Won't Work w/ CScrollView on Windows 95

	Article: Q135118
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.2
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC220bug kbVC400fix kbGrpDSMFCATL kbNoUpdatekbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A CScrollView that uses ResizeParentToFit to force its parent to resize itself
	such that the client area is the same size as the CScrollView doesn't work
	properly. The parent frame window will be very nearly the correct size, but it
	will still have vertical and horizontal scroll bars.
	
	CFormView, which is derived from CScrollView, will have the same problem.
	
	CAUSE
	=====
	
	The bug is in the ResizeParentToFit function. The ResizeParentToFit function
	does not properly account for cases where the child window is not located at
	location (0,0).
	
	The version of Visual C++ listed at the top of this article has been modified.
	MFC was changed so that a CFormView will have the properly sunken-edge (or 3D)
	look that a client window should have under Windows 95. This change was done by
	adding the WS_EX_CLIENTEDGE style to all CFormView objects when they are
	created. Because of this change the client area of the CFormView is no longer at
	position (0,0), so ResizeParentToFit fails to work correctly.
	
	RESOLUTION
	==========
	
	Override the ResizeParentToFit function, and modify it to do the proper
	calculations for your CFormView-derived class. The code for ResizeParentToFit
	can be found in the \MSVC20\MFC\SRC directory in the Viewscrl.cpp file.
	Implement this code in your application by first declaring it in your class, as
	in this example: "
	
	  protected:
	     void ResizeParentToFit(BOOL bShrinkOnly = TRUE);
	
	" (without the quotation marks) Implement the ResizeParentToFit function. To do
	this, copy the existing implementation from Viewscrl.cpp, and then make the
	following changes in your implementation:
	
	1. Change the assert that uses MM_NONE to use 0. MM_NONE is a special mapping
	  mode defined for the CScrollView class. It is defined in Viewscrl.cpp as 0;
	  therefore, it will not be available for your derived class.
	
	  Change this:
	
	        ASSERT( m_nMapMode != MM_NONE);
	
	  To this: "
	
	        ASSERT( m_nMapMode != 0);
	
	  " (without the quotation marks)
	
	2. Account for the offset of the client area.
	
	  Change this:
	
	        ...
	        CalcWindowRect(rectView, CWnd::adjustOutside);
	        if (bShrinkOnly)
	        ...
	
	  To this: "
	
	        ...
	        CalcWindowRect(rectView, CWnd::adjustOutside);
	        rectView.OffsetRect(-rectView.left, -rectView.top);
	        ASSERT(rectView.left == 0 && rectView.top == 0);
	        if (bShrinkOnly)
	        ...
	
	  " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the version of MFC that
	ships with Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: 2.20 3.20 4.00 Windows 95
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC220bug kbVC400fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
