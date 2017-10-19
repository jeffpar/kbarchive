---
layout: page
title: "Q131100: INFO: DoDragDrop() Parameter Documented Incorrectly"
permalink: /kb/131/Q131100/
---

## Q131100: INFO: DoDragDrop() Parameter Documented Incorrectly

	Article: Q131100
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,5.0
	Operating System(s): 
	Keyword(s): kbole kbdocfix kbdocerr kbActiveX kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for COleClientItem::DoDragDrop(),
	COleServerItem::DoDragDrop(), and COleDataSource::DoDragDrop() give the
	following incorrect information for the lpRectStartDrag parameter:
	
	In Visual C++ Prior to 5.0
	--------------------------
	
	  lpRectStartDrag:
	
	  Pointer to the rectangle that defines where the drag
	  actually starts. It does not start until the mouse cursor leaves the
	  rectangle. If NULL, a default rectangle is used so that the drag
	  starts when the mouse cursor moves one pixel.
	
	In Visual C++ 5.0
	-----------------
	
	Call the DoDragDrop member function to perform a drag-and-drop operation. The
	drag-and-drop operation does not start immediately. It waits until the mouse
	cursor leaves the rectangle specified by lpRectStartDrag or until a specified
	number of milliseconds have passed. If lpRectStartDrag is NULL, the size of the
	rectangle is one pixel. The delay time is specified by the DragDelay value in
	the [Windows] section of WIN.INI. If this value is not in WIN.INI, the default
	value of 200 milliseconds is used.
	
	Correction
	----------
	
	The documentation for the lpRectStartDrag parameter for DoDragDrop() should be:
	
	  lpRectStartDrag:
	
	  Pointer to the rectangle that defines where the drag
	  actually starts. It does not start until the mouse cursor leaves the
	  rectangle or until a specific number of milliseconds has passed. If
	  NULL, a default rectangle is used so that the drag starts when the
	  mouse cursor moves one pixel. The number of milliseconds is specified
	  by a registry key setting. The value can be found in the Windows NT
	  system registry under the key HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ 
	  Windows\NT\CurrentVersion\IniFileMapping\win.ini\Windows\DragDelay,
	  or in the WIN.INI file under the [Windows] section if running under
	  Windows version 3.x. If the key is not present, a default value of 200
	  milliseconds is used.
	
	This problem was corrected in Visual C++ version 6.0 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbdocfix kbdocerr kbActiveX kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,5.0
	Solution Type     : kbfix
	
	=============================================================================
	
