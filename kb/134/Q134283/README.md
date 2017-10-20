---
layout: page
title: "Q134283: FIX: Undocking Toolbar May Disappear When Removed from Dockbar"
permalink: /kb/134/Q134283/
---

## Q134283: FIX: Undocking Toolbar May Disappear When Removed from Dockbar

{% raw %}

	Article: Q134283
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATL kbNoUpdatekbbuglist kbfi
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to undock or tear off a toolbar window from its dockbar window
	occasionally causes the toolbar to disappear when the mouse button is released.
	
	CAUSE
	=====
	
	This is caused by a bug in the MFC source code for CFrameWnd::CanDock().
	Essentially, what happens is that the toolbar is being docked to an invisible
	dockbar. The CFrameWnd::CanDock() function doesn't check to see if the new
	docbar window is visible.
	
	When you float a toolbar, and then close it by double-clicking the tiny control
	menu or icon, the window is not destroyed; it is just hidden. If you happen to
	drag and release another toolbar over the hidden toolbar, the toolbar being
	dragged is docked to the hidden toolbar.
	
	RESOLUTION
	==========
	
	To work around this problem, rebuild the project with Visual C++ version 2.1. If
	that is not an option for you, you can work around the problem by modifying the
	WINFRM2.CPP MFC source file and rebuilding the appropriate MFC library.
	
	NOTE: Microsoft recommends against rebuilding the MFC30(D).DLL (the MFC Shared
	DLL). MFC30(D).DLL is a common component of many MFC applications. Rebuilding
	MFC30(D).DLL runs the risk of breaking other applications that rely on this
	component. If you do rebuild MFC30(D).DLL, please rename the DLL.
	
	Steps to fix WINFRM2.CPP Directly
	---------------------------------
	
	1. Replace following line of code in CFrameWnd::CanDock():
	
	        if (pDockBar->IsDockBar() &&
	           (pDockBar->m_dwStyle & dwDockStyle & CBRS_ALIGN_ANY) &&
	           (!pDockBar->m_bFloating ||
	        (dwDockStyle & pDockBar->m_dwStyle & CBRS_FLOAT_MULTI)))
	
	  with this code:
	
	        if (pDockBar->IsDockBar() && pDockBar->IsWindowVisible() &&
	           (pDockBar->m_dwStyle & dwDockStyle & CBRS_ALIGN_ANY) &&
	           (!pDockBar->m_bFloating ||
	           (dwDockStyle & pDockBar->m_dwStyle & CBRS_FLOAT_MULTI)))
	
	2. Rebuild the MFC library according to the instructions in the
	  ..\MSVC\MFC\SRC\README.TXT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 2.1.
	
	Additional query words: 2.00 3.0 3.00 CToolbar CDockBar
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
