---
layout: page
title: "Q131815: PRB: Assert Error in BARTOOL.CPP line 398"
permalink: kb/131/Q131815/
---

## Q131815: PRB: Assert Error in BARTOOL.CPP line 398

	Article: Q131815
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC200 kbVC210 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Assert error occurs in BARTOOL.CPP, line 398 if a command handler for a
	toolbar button destroys the window that owns the toolbar.
	
	CAUSE
	=====
	
	The MFC implementation of CToolbar::OnLButtonUp() performs additional processing
	after invoking the command handler implemented for that particular toolbar
	button.
	
	Specifically, the CToolbar::OnLButtonUp() function executes this code:
	
	     GetOwner()->SendMessage(WM_COMMAND, nIDCmd)
	
	This in turn immediatly executes the command handler. The OnLButtonUp() function
	does more processing after sending the WM_COMMAND message.
	
	If the execution of the command handler causes the toolbar to be destroyed, then
	OnLButtonUp() attempts a call to SetButtonStyle(iButtonCapture, nNewStyle) on a
	toolbar that no longer exists. This action leads to the assertion failure.
	
	RESOLUTION
	==========
	
	Implement the command handler to post the message that eventually destroys the
	toolbar. This way the toolbar is not destroyed until the execution of
	OnLButtonUp is complete.
	
	Example Scenario and Resolution
	-------------------------------
	
	A popular scenario that leads to this assertion is implementing a toolbar button
	that is intended to close a CFrameWnd window. For example, you implement a
	command handler in the class derived from CFrameWnd to execute the code
	SendMessage(WM_CLOSE). Executing this code immediately causes a WM_CLOSE message
	to be sent to the frame window, which in turn destroys that window and all the
	windows it owns, including the toolbar, thereby causing the assertion.
	
	A better implementation is to execute PostMessage(WM_CLOSE) in the toolbar
	button's command handler. Then the WM_CLOSE message is posted at the end of the
	message queue, and the OnLButtonUp() completes before the WM_CLOSE message is
	handled.
	
	MORE INFORMATION
	================
	
	This problem is specific to MFC versions 3.x, shipped with Visual C++, 32-bit
	Edition, versions 2.x. The CToolBar object of MFC versions previous to 2.5 was
	not as sophisticated and did not provide the OnLButtonUp() member function. The
	implementation of CToolbar::OnLButtonUp() in MFC version 2.5 (16-bit) is
	slightly different from that of MFC version 3.0 (32-bit); in MFC version 2.5,
	GetOwner()->SendMessage(WM_COMMAND, nIDCmd) is the last line of code in
	CToolbar::OnLButtonUp(). In MFC version 4.0 (shipped with Visual C++ version
	4.0), the CToolBar object has been redefined significantly and no longer
	supports the OnLButtonUp() function. In addition, this redefinition produced a
	more robust CToolBar that does not assert in the example scenario discussed
	above.
	
	REFERENCES
	==========
	
	For more information about this issue, see \MSVC20\MFC\SRC\BARTOOL.CPP.
	
	Additional query words: 2.00 2.10 3.00 3.10 3.0 3.1
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC200 kbVC210 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
