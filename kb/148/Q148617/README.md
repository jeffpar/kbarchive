---
layout: page
title: "Q148617: HOWTO: Speed Up Load Time of OLE Controls"
permalink: /kb/148/Q148617/
---

## Q148617: HOWTO: Speed Up Load Time of OLE Controls

	Article: Q148617
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When bringing up a dialog template that contains one or more OLE Controls, the
	delay can be significant depending on the speed of the computer. You can use the
	AfxOleLockControl() function to speed up the loading of the dialog by preloading
	the control in the application.
	
	MORE INFORMATION
	================
	
	You can load the OLE Control into the address space of the executable at any
	time by using the AfxOleLockControl() function. There are two versions of this
	function, one that takes a class id (CLSID) and one that takes a program id
	(ProgID).
	
	You can unload the control at any time by calling AfxOleUnlockControl() or
	AfxOleUnlockAllControls(). There are two versions of AfxOleUnlockControl(), one
	takes a class id and the other taking a program id.
	
	If a splash screen is used by the application, that might be a good time to load
	the controls. It can be done at any point after the call to
	AfxEnableControlContainer() in the CWinApp::InitInstance(), and the loaded
	controls can then be unloaded at any time.
	
	REFERENCES
	==========
	
	These functions were not documented in Visual C++ 4.0 Help. You can find the
	source code for these functions in Occlock.cpp in the \Msdev\Mfc\Src
	subdirectory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
