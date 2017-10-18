---
layout: page
title: "Q147426: PRB: DoSuperclassPaint Calls WM_PRINT for Windows 95"
permalink: kb/147/Q147426/
---

## Q147426: PRB: DoSuperclassPaint Calls WM_PRINT for Windows 95

	Article: Q147426
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbMFC kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, you may need to take a window's custom control and subclass it
	with an OLE control. However, when the control is built using MFC 4.0 and being
	used in Windows 95, the OLE control may paint incorrectly.
	
	CAUSE
	=====
	
	A typical OnDraw() handler in an OLE control that subclasses a window's custom
	control makes a call to DoSuperclassPaint(). In Windows 95, The MFC 4.0
	implementation of DoSuperClassPaint() has been changed to send a WM_PRINT
	message to the custom control's window procedure instead of a WM_PAINT message.
	If the original custom control does not handle WM_PRINT, the OLE control will
	not paint correctly.
	
	RESOLUTION
	==========
	
	It is necessary for the original custom control to handle the WM_PRINTCLIENT
	message, which is what the DefWindowProc sends in response to receiving a
	WM_PRINT message. The WM_PRINTCLIENT message should be handled in the same
	manner as the WM_PAINT message except that the calls to BeginPaint() and
	EndPaint() should be removed.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbole kbCtrl kbMFC kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
