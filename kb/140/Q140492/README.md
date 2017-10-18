---
layout: page
title: "Q140492: PRB: Possible Recursion Problems with OLE Controls"
permalink: kb/140/Q140492/
---

## Q140492: PRB: Possible Recursion Problems with OLE Controls

	Article: Q140492
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use an OLE control in the same module that implements it may
	generate an exception caused by a stack overflow. One example of using an OLE
	control in this manner is placing an instance of an OLE control in that same OLE
	control's About dialog box.
	
	CAUSE
	=====
	
	Calling certain CWnd members can create an infinitely recursive loop, causing a
	stack overflow to occur.
	
	RESOLUTION
	==========
	
	Avoid calling certain CWnd members when using an OLE control in the same module
	that implements it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The COleControl class itself has been written to make sure that its members are
	safe and can be called even when a control is being used in the module that
	implements it. However, certain CWnd members are not safe to call when a control
	is being used in this fashion. CWnd members that can cause problems include
	ShowWindow, MoveWindow, SetWindowPos, EnableWindow, SetWindowText,
	GetWindowText, and GetWindowTextLength.
	
	There may be other members that can cause the same problem. If a control is being
	used in the same module that implements it and a stack overflow occurs, the
	first thing the control programmer should check for is this problem.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
