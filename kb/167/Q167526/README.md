---
layout: page
title: "Q167526: FIX: ATL Control May Cause an Access Violation"
permalink: kb/167/Q167526/
---

## Q167526: FIX: ATL Control May Cause an Access Violation

	Article: Q167526
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200bug kbATL210bug kbCOMt kbCtrlCreate kbOSWinNT400 kbVC500bug kbVS97sp1
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL control that superclasses a Windows control and runs on Windows NT can
	cause an access violation.
	
	CAUSE
	=====
	
	When ATL registers the Window Class for the control, it copies the WNDCLASSEX
	structure from the control it is superclassing. Because Windows controls are a
	global class, that attribute is given to the ATL control.
	
	The problem occurs when the control[ASCII 146]s DLL is unloaded and then reloaded
	in the same process. ATL tries to register the Window Class with the current
	WndProcAddress, but Windows NT does not allow a Global Class to be overwritten.
	If the DLL was reloaded at another address, the next call to the WndProc causes
	an access violation.
	
	RESOLUTION
	==========
	
	In the file Atlwin.cpp, insert the following line (on line 610)) in the function
	CContainedWindow::RegisterWndSuperclass() just before the call to
	RegisterClassEx :
	
	     wc.style &= ~CS_GLOBALCLASS;  // don't register as global class
	     atom = ::RegisterClassEx(&wc);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	This bug is hard to reproduce because it will only appear if the client
	application unloads and then reloads the DLL and then the DLL is loaded at
	another address. But any superclassed control built without the above resolution
	may fail under the right conditions.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Chuck Bell, Microsoft Corporation
	
	
	Additional query words: Control SuperClass Access Violation
	
	======================================================================
	Keywords          : kbActiveX kbATL200bug kbATL210bug kbCOMt kbCtrlCreate kbOSWinNT400 kbVC500bug kbVS97sp1fix kbWndwClass kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : :2.0,2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
